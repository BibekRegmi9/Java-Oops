package com.bibekoops;

// final variable, method, class

class Calcc{
    public void show(){
        System.out.println("in Calc show");
    }
    public void add(int a, int b){
        System.out.println(a+b);
    }
}
public class FinalKeyword {
    public static void main(String[] args) {

//        final int num = 8;
//        num = 9;
//        System.out.println(num);


        Calcc obj = new Calcc();
        obj.show();
        obj.add(5,5);

    }
}
