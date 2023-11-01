# <Backend Assignment>

## Description

Backend challenge to fetch json data and do sql query on the fetched data. 


- Fetch data for Petroleum Products from the data.json file using an API call. API endpoint https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json
- Store the response data into a sqlite database.
- Normalize the data and store into relational structure
- Fetch the data from the newly stored sqlite database
- List the total sale of each petroleum.
- List the top 3 countries that have the highest and lowest total sales till date.
- List average sale of each petroleum product for 4 years of interval. Note: Do not count zero sale during average calulation


## Table of Contents 



- [Installation](#installation)
- [Usage](#usage)


## Installation and setup

- Clone this project in your directory.
- Open project directory in vs code.
- Open terminal in root folder.
- Execute ```npm install``` in the terminal to download the required node packages.
- Execute ```npm run fetchdata``` in the terminal to load the json data into the sqlite database.
- Make a new .env file in the directory and add your number PORT in the .env file.
- Run ```npm start``` in the terminal. It will start the server.


## Results

- To List the total sale of each petroleum. Open url =```http://localhost:3009/totalsale```  in to your browser. You can see the results in Terminal and browser. And replace the port number with your port number.

- To List the top 3 countries that have the highest total sales till date. 
Open url =```http://localhost:3009/highestsales```

- To List the top 3 countries that have the lowest total sales till date. 
Open url =```http://localhost:3009/lowestsales```

- To List average sale of each petroleum product for 4 years of interval. Note: Do not count zero sale during average calulation.
open url = ```http://localhost:3009/averagesale```



## Screenshots


    Total Sale
    ![1](https://github.com/BibekRegmi9/Java-Oops/assets/47585371/709a08ec-4774-4e3f-bacd-f59e4f7de029)
    ![2](https://github.com/BibekRegmi9/Java-Oops/assets/47585371/7bb4ee71-fd8f-4162-9d90-96daa1eb6a7d)

    ![total sale](assets//1.png)
    ![total sale](assets//2.png)
    

    Highest and Lowest Sales
    ![4](https://github.com/BibekRegmi9/Java-Oops/assets/47585371/76611ea1-c106-4c0e-aacb-0519e22ec34b)
    ![3](https://github.com/BibekRegmi9/Java-Oops/assets/47585371/12823bf5-f2e5-4ba4-9ae3-c779cd202902)
    ![5](https://github.com/BibekRegmi9/Java-Oops/assets/47585371/eafab089-9b55-4a9e-a4af-7e7470138a86)

    ![highest sale](assets//3.png)
    ![lowest sale](assets//4.png)
    ![highest and lowest sale](assets//5.png)
    

    Average Sale
    ![6](https://github.com/BibekRegmi9/Java-Oops/assets/47585371/bfbb9996-944d-49c1-bacb-0001a73a06df)
    ![7](https://github.com/BibekRegmi9/Java-Oops/assets/47585371/19828446-769e-43f9-8ba6-945f51c7280c)

    ![total sale](assets//6.png)
    ![total sale](assets//7.png)
    





## Tests

- To List the total sale of each petroleum. Open url =```http://localhost:3009/totalsale```  in to your browser. You can see the results in Terminal and browser. And replace the port number with your port number.

- To List the top 3 countries that have the highest total sales till date. 
Open url =```http://localhost:3009/highestsales```

- To List the top 3 countries that have the lowest total sales till date. 
Open url =```http://localhost:3009/lowestsales```

- To List average sale of each petroleum product for 4 years of interval. Note: Do not count zero sale during average calulation.
open url = ```http://localhost:3009/averagesale```
