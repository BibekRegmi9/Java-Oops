package com.bibekoops;

class Pen {
    String color;
    String type;

    public void write() {
        System.out.println("Writing ....");
    }

    public void printColor(){
        System.out.println(this.color);
    }

}


class Student {
    String name;
    int age;

    public void printInfo() {
        System.out.println(this.name);
        System.out.println(this.age);
    }


    // making constructors
    // type 1 constructors
//    Student() {
//        System.out.println("Constructors Called");

    // Making constructor
    // Type 2 constructors
    Student(String name, int age){
        this.name = name;
        this.age = age;

    }
}



public class classTut {
    public static void main(String[] args) {
//        Pen pen1 = new Pen();
//        pen1.color = "red";
//        pen1.type = "dot";
//
//        Pen pen2 = new Pen();
//        pen2.color = "black";
//        pen2.type = "gel";
//
//        pen1.printColor();
//        pen2.printColor();




//        Student s1 = new Student(); // constructor
//        s1.name = "Bibek";
//        s1.age = 22;
//
//        s1.printInfo();


        Student s1 = new Student("Beethoven", 21);
        s1.printInfo();
    }
}
