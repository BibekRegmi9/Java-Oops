package com.bibekoops;

class Human{
    private int age;
    private String name ;

    public int getAge(){
        return age;
    }


    public String getName(){
        return name;
    }

    public void setAge(int a){
        age = a;

    }

    public void setName(String n){
        name = n;
    }
}


public class encapsulation {
    public static void main(String[] args) {
        Human obj = new Human();

        obj.setAge(22);
        obj.setName("Bibek");


        System.out.println(obj.getName() + " " + obj.getAge());
    }
}
