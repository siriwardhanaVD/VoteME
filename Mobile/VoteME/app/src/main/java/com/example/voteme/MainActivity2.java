package com.example.voteme;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class MainActivity2 extends AppCompatActivity {

    TextView t1,t2 , tHeading;
    EditText ed1 , ed2;
    String constituencyDetails[] = {"", "", "", "", "","" , "" , ""};
    String cID = "0";
    String techName = "";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        t1 = findViewById(R.id.topic);
        tHeading = findViewById(R.id.textView2);
        t2 = findViewById(R.id.tech);
        ed1 = findViewById(R.id.NIC);
        ed2 = findViewById(R.id.OTP);


        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            cID = extras.getString("cID");
            techName = extras.getString("techName");
            //The key argument here must match that used in the other activity
        }

        DatabaseReference rootRef = FirebaseDatabase.getInstance().getReference().child("constituency");
        DatabaseReference mDbRef = rootRef.child(cID);
        String finalTechName = techName;
        mDbRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                // This method is called once with the initial value and again
                // whenever data at this location is updated.
                t1.setText("Welcome to " + dataSnapshot.child("conName").getValue(String.class) + " Voting Center");
                t2.setText("If you have any issue please contact the technical officer Mr. " + finalTechName + " for more infomation");

                constituencyDetails[0] = dataSnapshot.child("ID").getValue(String.class);
                constituencyDetails[1] = dataSnapshot.child("TechnicalOfficerID").getValue(String.class);
                constituencyDetails[2] = dataSnapshot.child("address").getValue(String.class);
                constituencyDetails[3] = dataSnapshot.child("conName").getValue(String.class);
                constituencyDetails[4] = dataSnapshot.child("currentLoggedInUser").getValue(String.class);
                constituencyDetails[5] = dataSnapshot.child("distric").getValue(String.class);
                constituencyDetails[6] = dataSnapshot.child("province").getValue(String.class);
            }

            @Override
            public void onCancelled(DatabaseError error) {
                // Failed to read value
                //Log.w(TAG, "Failed to read value.", error.toException());
            }
        });
    }

    public void loginVoter(View view){

        DatabaseReference rootRef = FirebaseDatabase.getInstance().getReference().child("voters");
        DatabaseReference mDbRef = rootRef.child(ed1.getText().toString());
        mDbRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                // This method is called once with the initial value and again
                // whenever data at this location is updated.

                if(ed1.getText().toString().equals(dataSnapshot.child("NIC").getValue(String.class)) && ed2.getText().toString().equals(dataSnapshot.child("OTP").getValue(String.class))){
                    if(!constituencyDetails[3].equals(dataSnapshot.child("constituency").getValue(String.class))){
                        Toast.makeText(getApplicationContext(),"Constituency doesn't matched",Toast.LENGTH_SHORT).show();
                    }
                    else {
                        FirebaseDatabase database2 = FirebaseDatabase.getInstance();
                        DatabaseReference myRef2 = database2.getReference("constituency").child(constituencyDetails[0]);

                        myRef2.child("currentLoggedInUser").setValue(dataSnapshot.child("NIC").getValue(String.class));
                        int val = -1;
                        if(Integer.valueOf(dataSnapshot.child("voteStatus").getValue(String.class)).equals(val)){
                            Intent i = new Intent(MainActivity2.this, MainActivity4.class);
                            i.putExtra("data", "-1");
                            i.putExtra("cID", cID);
                            i.putExtra("techName", techName);
                            startActivity(i);
                        }
                        else {
                            if(Integer.valueOf(dataSnapshot.child("voteStatus").getValue(String.class)).equals(1)){
                                Intent i = new Intent(MainActivity2.this, MainActivity4.class);
                                i.putExtra("data", "1");
                                i.putExtra("cID", cID);
                                i.putExtra("techName", techName);
                                startActivity(i);
                            }
                            else{
                                Intent i = new Intent(MainActivity2.this, MainActivity3.class);
                                constituencyDetails[7] = dataSnapshot.child("NIC").getValue(String.class);
                                i.putExtra("data", constituencyDetails);
                                i.putExtra("cID", cID);
                                i.putExtra("techName", techName);
                                startActivity(i);
                                mDbRef.removeEventListener(this);
                            }
                        }

                    }
                }
                else {
                    Toast.makeText(getApplicationContext(),"Invalid NIC or OTP",Toast.LENGTH_SHORT).show();
                }

            }

            @Override
            public void onCancelled(DatabaseError error) {
                // Failed to read value
                //Log.w(TAG, "Failed to read value.", error.toException());
            }
        });
    }
}