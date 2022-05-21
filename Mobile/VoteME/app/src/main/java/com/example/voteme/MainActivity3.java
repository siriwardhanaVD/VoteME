package com.example.voteme;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.squareup.picasso.Picasso;

public class MainActivity3 extends AppCompatActivity {

    LinearLayout main;
    int count = 1;
    int timeCount = 59;
    long ClassCount = 0;
    String msg = "";
    String constituencyDetails[] = {"", "", "", "", "","" , "" , ""};
    String candidate = "";
    String party = "";
    String cID,techName;
    MediaPlayer mp;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            constituencyDetails = extras.getStringArray("data");
            cID = extras.getString("cID");
            techName = extras.getString("techName");
        }

        main = findViewById(R.id.main);
        mp = MediaPlayer.create(this, R.raw.successfull);
        DatabaseReference rootRef = FirebaseDatabase.getInstance().getReference();
        DatabaseReference mDbRef = rootRef.child("candidate");
        mDbRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                String text = "";
                ClassCount = snapshot.getChildrenCount();
                for (DataSnapshot dsp : snapshot.getChildren()){
                    LinearLayout l = new LinearLayout(getApplicationContext());
                    l.setOrientation(LinearLayout.HORIZONTAL);

                    ImageView img = new ImageView(getApplicationContext());
                    String uri = dsp.child("img").getValue(String.class);  // where myresource (without the extension) is the file
                    Picasso.get().load(uri).into(img);


                    LinearLayout l1 = new LinearLayout(getApplicationContext());
                    l1.setOrientation(LinearLayout.VERTICAL);

                    LinearLayout l2 = new LinearLayout(getApplicationContext());
                    l2.setOrientation(LinearLayout.VERTICAL);

                    LinearLayout l3 = new LinearLayout(getApplicationContext());
                    l3.setOrientation(LinearLayout.VERTICAL);


                    TextView t1 = new TextView(getApplicationContext());
                    t1.setText(dsp.child("partyName").getValue(String.class));
                    TextView t2 = new TextView(getApplicationContext());
                    t2.setText(dsp.child("CandidateName").getValue(String.class));

                    Button btn = new Button(getApplicationContext());
                    //btn.setText("X");
                    btn.setBackgroundResource(R.drawable.rounded);
                    btn.setId(count);
                    count++;
                    btn.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View view) {
                            clearAll();
                            btn.setText("X");
                            candidate = dsp.child("CandidateName").getValue(String.class);
                            party = dsp.child("partyName").getValue(String.class);
                        }
                    });

                    LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
                    l.setLayoutParams(layoutParams);

                    LinearLayout.LayoutParams layoutParams1 = new LinearLayout.LayoutParams(150, 150);
                    layoutParams1.setMargins(100, 10, 0, 10);
                    l1.setLayoutParams(layoutParams1);

                    LinearLayout.LayoutParams layoutParams2 = new LinearLayout.LayoutParams(500, ViewGroup.LayoutParams.WRAP_CONTENT);
                    layoutParams2.gravity = Gravity.CENTER;
                    layoutParams2.setMargins(100, 0, 0, 0);
                    l2.setLayoutParams(layoutParams2);

                    LinearLayout.LayoutParams layoutParams3 = new LinearLayout.LayoutParams(150, ViewGroup.LayoutParams.WRAP_CONTENT);
                    layoutParams3.gravity = Gravity.CENTER;
                    layoutParams3.setMargins(100, 10, 0, 10);
                    l3.setLayoutParams(layoutParams3);

                    l1.addView(img);
                    l1.setWeightSum(1);
                    l2.addView(t1);
                    l2.addView(t2);
                    l2.setWeightSum(2);
                    l3.addView(btn);
                    l3.setWeightSum(1);

                    l.addView(l1);
                    l.addView(l2);
                    l.addView(l3);
                    l.setWeightSum(3);
                    l.setBackgroundResource(R.drawable.borderbottom);
                    main.addView(l);
                }
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {
            }
        });
    }

    public void clearAll(){
        int totalClassCount = (int) ClassCount;
        for(int i = 1 ; i <= totalClassCount; i++){
            Button btn = findViewById(i);
            btn.setText("");
        }
    }

    public void cancelVote(View view){
        Intent i = new Intent(MainActivity3.this, confirmation.class);
        i.putExtra("data", constituencyDetails);
        i.putExtra("status", "cancel");
        i.putExtra("candidate", "" );
        i.putExtra("party", "" );
        i.putExtra("cID", cID);
        i.putExtra("techName", techName);
        startActivity(i);
    }
    public void vote(View view){
        if(!candidate.equals("")) {
            msg = constituencyDetails[7] + "-" + "Voted" + "-" + candidate + "-" + party + "-" + constituencyDetails[3]  + "-" + constituencyDetails[5] + "-" + constituencyDetails[6];
            saveDetails("1");
            Toast.makeText(getApplicationContext(),"Thank You! Your Vote Saved",Toast.LENGTH_SHORT).show();
            mp.start();
            Intent i = new Intent(MainActivity3.this, MainActivity2.class);
            i.putExtra("cID", cID);
            i.putExtra("techName", techName);
            startActivity(i);
        }
        else {
            Toast.makeText(getApplicationContext(),"Please vote on a candidate",Toast.LENGTH_SHORT).show();
        }
    }

    public void saveDetails(String id){
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        DatabaseReference myRef = database.getReference("console");

        myRef.child(constituencyDetails[7]).setValue(msg);

        FirebaseDatabase database2 = FirebaseDatabase.getInstance();
        DatabaseReference myRef2 = database2.getReference("voters").child(constituencyDetails[7]);

        myRef2.child("voteStatus").setValue(id);

        FirebaseDatabase database3 = FirebaseDatabase.getInstance();
        DatabaseReference myRef3 = database3.getReference("constituency").child(cID);

        myRef3.child("currentLoggedInUser").setValue("");
    }
}