package com.bibekoops;


class Aaa{
    int age;

    public void show(){
        System.out.println("In show..");
    }

    class Bbb{
        public void config(){
            System.out.println("In config..");
        }
    }

}
public class InnerClass {
    public static void main(String[] args) {
        Aaa obj = new Aaa();
        obj.show();

        Aaa.Bbb obj1 = obj.new Bbb();
        obj1.config();
    }
}
