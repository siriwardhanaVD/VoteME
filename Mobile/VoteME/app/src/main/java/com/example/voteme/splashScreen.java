package com.example.voteme;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;

import java.util.Timer;
import java.util.TimerTask;

public class splashScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);


        final int[] cout = {0};
        new Timer().scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                cout[0]++;
                if( cout[0] == 5){
                    Intent i = new Intent(splashScreen.this, MainActivity.class);
                    startActivity(i);
                }
                //your method
            }
        }, 0, 1000);//put here time 1000 milliseconds=1 second
    }
}