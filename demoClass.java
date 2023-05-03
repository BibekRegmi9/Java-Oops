package com.bibekoops;


class Mobile{
    String brand;
    int price;
    static String name;

    public void show(){
        System.out.println(brand + " : "+ price + " : " + name);
    }
}




public class demoClass {
    public static void main(String[] args) {
        Mobile obj1 = new Mobile();
        obj1.brand = "Apple";
        obj1.price = 1500;
        Mobile.name = "Smartphone";

        Mobile obj2 = new Mobile();
        obj1.brand = "Samsung";
        obj1.price = 1500;
        Mobile.name = "Smartphone";

        obj1.show();
        obj2.show();

    }
}
