package com.bibekoops;

class Calculator{
    public int add(int num1, int num2){
        return num1+num2;
    }

    public int sub(int num1, int num2){
        return num1-num2;
    }


}

public class inheritance {
    public static void main(String[] args) {
//        AdvCalc obj = new AdvCalc();
        ScientificCalculator obj = new ScientificCalculator();

        int r1 = obj.add(5,5);
        int r2 = obj.sub(10,5);
        int r3 = obj.multi(5,10);
        int r4 = obj.div(10,5);
        double r5 = obj.power(4,2);

        System.out.println(r1 + " " + r2);
        System.out.println(r3 + " " + r4);
        System.out.println(r5);
    }
}
