package com.example.voteme;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class MainActivity4 extends AppCompatActivity {


    TextView t1;
    String cID,techName;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main4);

        t1 = findViewById(R.id.msg);
        Bundle extras = getIntent().getExtras();
        cID = extras.getString("cID");
        techName = extras.getString("techName");
        if (extras != null) {
            if(Integer.valueOf(extras.getString("data")) == -1){
                t1.setText("Your vote has been cancelled");
                t1.setTextColor(getResources().getColor(R.color.loginButton));
            }
            else{
                t1.setText("You have already voted");
                t1.setTextColor(getResources().getColor(R.color.teal_700));
            }
        }

    }

    public void logOut(View view){
        FirebaseDatabase database2 = FirebaseDatabase.getInstance();
        DatabaseReference myRef2 = database2.getReference("constituency").child(cID);

        myRef2.child("currentLoggedInUser").setValue("");

        Intent i = new Intent(MainActivity4.this, MainActivity2.class);
        startActivity(i);
        i.putExtra("cID", cID);
        i.putExtra("techName", techName);
    }


}