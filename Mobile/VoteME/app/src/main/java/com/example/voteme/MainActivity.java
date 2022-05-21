package com.example.voteme;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class MainActivity extends AppCompatActivity {

    EditText un,pw;
    Button login;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        un = findViewById(R.id.un);
        pw = findViewById(R.id.pw);
        login = findViewById(R.id.btn);


        /*ActionBar actionBar = getSupportActionBar();
        actionBar.setDisplayHomeAsUpEnabled(false);*/
    }

    @Override
    public void onBackPressed(){
        Toast.makeText(getApplicationContext(),"Cant Go Back",Toast.LENGTH_SHORT).show();
    }
    public void loginTechOfficer(View view){
        DatabaseReference rootRef = FirebaseDatabase.getInstance().getReference().child("technicalOfficer");
        DatabaseReference mDbRef = rootRef.child(pw.getText().toString());
        mDbRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
            // This method is called once with the initial value and again
                // whenever data at this location is updated.
                System.out.println(un.getText().toString());
                System.out.println(pw.getText().toString());
                System.out.println(dataSnapshot.child("mobileNumber").getValue(String.class));
                System.out.println(dataSnapshot.child("NIC").getValue(String.class));

                if(un.getText().toString().equals(dataSnapshot.child("mobileNumber").getValue(String.class)) && pw.getText().toString().equals(dataSnapshot.child("NIC").getValue(String.class))){
                    Intent i = new Intent(MainActivity.this, MainActivity2.class);
                    i.putExtra("cID", dataSnapshot.child("cID").getValue(String.class));
                    i.putExtra("techName", dataSnapshot.child("fullName").getValue(String.class));
                    startActivity(i);
                }
                else {
                   Toast.makeText(getApplicationContext(),"Invalid username or password",Toast.LENGTH_SHORT).show();
                }

            }

            @Override
            public void onCancelled(DatabaseError error) {
                System.out.println(error);
            }
        });
    }
}