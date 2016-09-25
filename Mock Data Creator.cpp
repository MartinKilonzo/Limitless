#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <algorithm>
#include <sstream>

using namespace std;

std::string to_string(int i){
    std::stringstream ss;
    ss << i;
    return ss.str();
}

int main(){
    const char* paymentTypes[4] = {"operating line", "checking", "savings", "credit"};
    const char* fname[100] = {"Clarence","Kimberly","Jean","Stephen","Bobby","Phyllis","Heather","John","Roy","Gary","Elizabeth","Shirley","Michael","Gerald","Jessica","Benjamin","Kathryn","Theresa","Phyllis","Craig","Andrew","Antonio","Albert","David","Paula","Dennis","David","Fred","Norma","Michelle","Julie","Jack","Ernest","Deborah","Lillian","Rachel","Billy","Donald","Bruce","Jack","Irene","Brenda","Katherine","Mildred","Helen","Andrea","Melissa","Beverly","Sean","Albert","Nicholas","Louise","Michael","Ryan","Dorothy","Katherine","Christine","Dorothy","Patricia","Kathy","Joe","Randy","Christopher","Kelly","Lawrence","Michelle","Donald","Charles","Christina","Dorothy","Phyllis","Theresa","Anne","Anthony","Carolyn","Shawn","Julie","Jeremy","Paul","Sandra","Matthew","Dorothy","Brenda","Sean","Heather","Lori","Brenda","Harold","Richard","Matthew","Bobby","Martin","Joseph","Nicholas","Kathy","Teresa","David","Harold","Sara"};
    const char* lname[100] = {"Fuller","Powell","James","Lopez","Reed","Evans","Little","Long","Miller","Hall","Reed","Brown","Hill","Perez","Fisher","Mason","Reed","Rose","Sanchez","Williams","Castillo","Barnes","Webb","Moreno","Dean","Campbell","Nguyen","Cole","Myers","Henry","Burton","Carr","Gibson","Palmer","Green","Romero","Bradley","Garza","Gomez","Fuller","Graham","Weaver","Adams","Tucker","Cole","Woods","Chavez","Johnson","Price","Austin","Grant","Cole","Burn","Dean","Powell","Dunn","Greene","Day","Harvey","King","Cook","Lee","George","Harper","Duncan","Austin","Ford","Hunt","Carter","Reyes","Edwards","Riley","Walker","Mccoy","Morrison","Stanley","Roberts","Allen","Banks","Walker","Stone","White","Brown","Perry","Gray","Reyes","George","Hughes","Romero","Wheeler","Rogers","Ramos","Lynch","Myers","Mendoza","Sullivan","Alvarez","Phillips","Ortiz","Fung"};
    const char* department[3] = {"Marketing", "Operations", "Finance"};
    int value = 0;
    int limit = 0;
    int tempvalue = 0;
    int input;
    cin >> input;
    string res = "\"Users\":[";
    for(int i = 0; i < input; i++){
        value = 0;
        res += "{\"firstName\":\"";
        res += fname[(rand() + 1)%100];
        res += "\", ";
        res += "\"lastName\":\"";
        res += lname[(rand() + 1)%100];
        res += "\", ";
        res += "\"department\":\"";
        res += department[rand()%3];
        res += "\", ";
        res += "\"hasAdminAccess\":";
        res += "\"false\", ";
        //payment method
        res += "\"paymentsMethods\":[";
        int randgenerator2 = (int)rand()%5  + 2;
        for(int j = 0; j < 2; j++){
            res += "{";
            res += "\"paymentType\":\"";
            res += paymentTypes[j];
            res += "\", ";
            int randgenerator = (int)rand()%5 + 2;
            res += "\"transactions\":[";
            for(int k = 0; k < randgenerator; k ++){
                res += "{";
                res += "\"when\":";
                res += "\"2017/";
                res += to_string(rand()%12 + 1);
                res += "/";
                res += to_string(rand()%25 + 1);
                res +=  "\", ";
                res += "\"to\":\"";
                res += fname[(rand() + 1)%100];
                res += " ";
                res += lname[(rand() + 1)%100];
                res += "\", ";
                res += "\"value\":\"";
                tempvalue = rand()%100;
                value += tempvalue;
                res += to_string(tempvalue);
                res += "\"";
                if(k + 1 != randgenerator){
                    res += "}, ";
                }else{
                    res += "}";
                }
            }
            res += "], ";
            res += "\"balance\":\"";
            res += to_string(value);
            res += "\", ";
            res += "\"limit\":";
            limit = (value * 2) +((rand()%100) + 1) * 10;
            res += to_string(limit);
            if(j + 1 != 2){
                res += "}, ";
            }else{
                res += "}";
            }
        }
        res += "]"; //array of paymentMethods
        if(i + 1 != input){
            res += "}, ";
        }else{
            res += "}";
        }
    }
    res += "]";
    cout << res;
    return 0;
}
