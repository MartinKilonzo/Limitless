#include <string>
#include <stdio.h> 
#include <stdlib.h>
#include <iostream>

using namespace std;

int main(){
    const char* paymentTypes[3] = {"operating line", "checking", "savings"};
    const char* fname[100] = {"Clarence","Kimberly","Jean","Stephen","Bobby","Phyllis","Heather","John","Roy","Gary","Elizabeth","Shirley","Michael","Gerald","Jessica","Benjamin","Kathryn","Theresa","Phyllis","Craig","Andrew","Antonio","Albert","David","Paula","Dennis","David","Fred","Norma","Michelle","Julie","Jack","Ernest","Deborah","Lillian","Rachel","Billy","Donald","Bruce","Jack","Irene","Brenda","Katherine","Mildred","Helen","Andrea","Melissa","Beverly","Sean","Albert","Nicholas","Louise","Michael","Ryan","Dorothy","Katherine","Christine","Dorothy","Patricia","Kathy","Joe","Randy","Christopher","Kelly","Lawrence","Michelle","Donald","Charles","Christina","Dorothy","Phyllis","Theresa","Anne","Anthony","Carolyn","Shawn","Julie","Jeremy","Paul","Sandra","Matthew","Dorothy","Brenda","Sean","Heather","Lori","Brenda","Harold","Richard","Matthew","Bobby","Martin","Joseph","Nicholas","Kathy","Teresa","David","Harold","Sara"};
    const char* lname[100] = {"Fuller","Powell","James","Lopez","Reed","Evans","Little","Long","Miller","Hall","Reed","Brown","Hill","Perez","Fisher","Mason","Reed","Rose","Sanchez","Williams","Castillo","Barnes","Webb","Moreno","Dean","Campbell","Nguyen","Cole","Myers","Henry","Burton","Carr","Gibson","Palmer","Green","Romero","Bradley","Garza","Gomez","Fuller","Graham","Weaver","Adams","Tucker","Cole","Woods","Chavez","Johnson","Price","Austin","Grant","Cole","Burn","Dean","Powell","Dunn","Greene","Day","Harvey","King","Cook","Lee","George","Harper","Duncan","Austin","Ford","Hunt","Carter","Reyes","Edwards","Riley","Walker","Mccoy","Morrison","Stanley","Roberts","Allen","Banks","Walker","Stone","White","Brown","Perry","Gray","Reyes","George","Hughes","Romero","Wheeler","Rogers","Ramos","Lynch","Myers","Mendoza","Sullivan","Alvarez","Phillips","Ortiz","Fung"};
    
    int limit = 0;
    int input;
    cin >> input;
    string res = "\"Users\":[";
    for(int i = 0; i < input; i++){
        res += "{\"firstName\":\"";
        res += fname[rand()%100];
        res += "\", "; //random name
        res += ", \"";
        res += lname[rand()%100];
        res += "\":\"";
        res += "random\", "; //random last name
        res += "\"hasAdminAccess\":\"";
        res += "\"false\", ";
        //payment method
        for(int j = 0; j < (int)rand()%10; j++){
            res += "{";
            res += "\"limit\":";
            limit = (rand()%100) * 10;
            limit += rand()%10;
            res += limit;
            res +=  "\", ";
            res += "\"paymentType\":\"";
            res += paymentTypes[rand()%3];
            res += "\", ";
            res += "\"balance\":\"";
            res += to_string(rand()%limit);
            res += "\"}, ";
        }
        for(int k = 0; k < (int)rand()%100; k ++){
            res += "{";
            res += "\"when\":";
            res += "2017/";
            res += to_string(rand()%12);
            res += "/";
            res += to_string(rand()%25);
            res += "\", ";
            res += "limit";
            res +=  "\", ";
            res += "\"to\":\"";
            res += fname[rand()%100];
            res += "\"";
            res += "}";
        }
        res += "}";
    }
    res += "]";
    cout << res;
    return 0;
}