package com.bibekoops;



class Humann{
    private int age;
    private String name;

    public Humann(){
        age = 18;
        name = "James";
    }

    public Humann(int a, String name){
        name = "Browni";
        age =a;
    }
}


public class constructor {
    public static void main(String[] args) {

        Humann obj = new Humann();
        Humann obj1 = new Humann(18, "Browni");
    }
}
