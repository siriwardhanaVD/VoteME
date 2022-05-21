package com.example.voteme;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class languageSelect extends AppCompatActivity {

    String cID = "0";
    String techName = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_language_select);

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            cID = extras.getString("cID");
            techName = extras.getString("techName");
            //The key argument here must match that used in the other activity
        }

    }

    public void lan1(View view){
        Intent i = new Intent(languageSelect.this, MainActivity2.class);
        i.putExtra("lan", "1");
        i.putExtra("cID", cID);
        i.putExtra("techName", techName);
        startActivity(i);
    }
    public void lan2(View view){
        Intent i = new Intent(languageSelect.this, MainActivity2.class);
        i.putExtra("lan", "2");
        i.putExtra("cID", cID);
        i.putExtra("techName", techName);
        startActivity(i);
    }
    public void lan3(View view){
        Intent i = new Intent(languageSelect.this, MainActivity2.class);
        i.putExtra("lan", "3");
        i.putExtra("cID", cID);
        i.putExtra("techName", techName);
        startActivity(i);
    }
}