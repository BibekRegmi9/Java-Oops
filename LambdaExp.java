package com.bibekoops;


interface D {
    int add(int i, int j);
}
public class LambdaExp {
    public static void main(String[] args) {

        D obj = ( i,  j) ->  i+j;



        int result = obj.add(5,4);
        System.out.println(result);
    }
}
