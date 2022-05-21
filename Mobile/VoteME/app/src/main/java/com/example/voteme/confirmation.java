package com.example.voteme;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class confirmation extends AppCompatActivity {

    LinearLayout l1,l2;
    String constituencyDetails[] = {"", "", "", "", "","" , "" , ""};
    String status, candidate, msg, party;
    String cID,techName;
    MediaPlayer mp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_confirmation);

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            constituencyDetails = extras.getStringArray("data");
            status = extras.getString("status");
            candidate = extras.getString("candidate");
            party = extras.getString("party");
            cID = extras.getString("cID");
            techName = extras.getString("techName");
        }

        mp = MediaPlayer.create(this, R.raw.successfull);
        l1 = findViewById(R.id.cancel);
        l2 = findViewById(R.id.done);

        l1.setVisibility(View.GONE);
        l2.setVisibility(View.GONE);

        l1.setVisibility(View.VISIBLE);
        msg = constituencyDetails[7] + "-" + "Cancelled" + "-" + candidate + "-" + party + "-" + constituencyDetails[3]  + "-" + constituencyDetails[5] + "-" + constituencyDetails[6];

    }

    public void confirmCancelVote(View view){
        saveDetails("-1");
        Intent i = new Intent(confirmation.this,MainActivity2.class);
        i.putExtra("cID", cID);
        i.putExtra("techName", techName);
        startActivity(i);
        mp.start();

    }
    public void noOnCancelVote(View view){
        finish();
    }

    public void logOut(View view){
        FirebaseDatabase database2 = FirebaseDatabase.getInstance();
        DatabaseReference myRef2 = database2.getReference("constituency").child(cID);

        myRef2.child("currentLoggedInUser").setValue("");

        Intent i = new Intent(confirmation.this, MainActivity2.class);
        i.putExtra("cID", cID);
        i.putExtra("techName", techName);
        startActivity(i);
        finish();
    }

    public void saveDetails(String id){
        FirebaseDatabase database = FirebaseDatabase.getInstance();
        DatabaseReference myRef = database.getReference("console");

        myRef.child(constituencyDetails[7]).setValue(msg);

        FirebaseDatabase database2 = FirebaseDatabase.getInstance();
        DatabaseReference myRef2 = database2.getReference("voters").child(constituencyDetails[7]);

        myRef2.child("voteStatus").setValue(id);
    }
}