package com.bibekoops;


abstract class Car {
    public abstract void drive();
    public abstract void fly();

    public void playMusic(){
        System.out.println("Play Music");
    }
}

class Wagonr extends Car {
    public void drive(){
        System.out.println("Driving....");
    }

    public void fly(){
        System.out.println("Flying....");
    }
}
public class Abstract {
    public static void main(String[] args) {
        Car obj = new Wagonr();
        obj.drive();
        obj.playMusic();
    }
}
