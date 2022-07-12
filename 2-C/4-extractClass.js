/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

extract - 1

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    printf("hello , world \n");
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

extract - 2

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string answer = get_string("What's your name? ");
    printf("hello, %s \n", answer);

    // or

    printf("hello, %s \n",  get_string("What's your name? "));
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3- extract

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt user for x

    int x = get_int("x : ");

    // Prompt user for y
    int y = get_int("y : ");

    // Perform addition
    printf("%i\n", x + y);

    // int z = x + y;
    // printf("%i\n", z);
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4- extract

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    const int MINE = 2;
    int points = get_int("How many points did you lose? ");

    if (points < MINE)
    {
        printf("You lost fewer points than me.\n");
    }
    else if (points > MINE)
    {
        printf("You lost more points than me.\n");
    }
    else if (points == MINE)
    {
        printf("You lost the same number of points as me.\n");
    }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5- extract

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n = get_int("n: ");

    if (n % 2 == 0)
    {
        printf("even\n");
    }
    else
    {
        printf("odd\n");
    }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6- extract

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt user to agree
    char c = get_char("Do you agree? ");

    // Check whether agreed
    if (c == 'Y' || c == 'y')
    {
        printf("Agreed.\n");
    }
    else if (c == 'N' || c == 'n')
    {
        printf("Not agreed.\n");
    }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

7 -extract

#include <stdio.h>

void meow(int n);

int main(void)
{
    meow(6);
}

void meow(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

8- extract

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n;
    do
    {
        n = get_int("Size : ");
    } while (n < 1);
    {
        // for each row
        for (int i = 0; i < n; i++)
        {
            // for each column
            for (int j = 0; j < n; j++)
            {
                // print a brick
                printf("#");
            }
            // move to next row
            printf("\n");
        }
    }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

9 - extract 

#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt user for x
    float x = get_float("x :");

    // Prompt user for y
    float y = get_float("y :");

    // Divide x by y
    float z = x / y;
    printf("%.2f", z);
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

10 - extract

#include <cs50.h>
#include <math.h>
#include <stdio.h>

int main(void)
{
    float amount = get_float("Dollar Amount : ");
    int pennies = round(amount * 100);
    printf("Pennies %i\n", pennies);
}

برای استفاده از این  لایبری اون باید بیایم و این دستور رو استفاده بکنی

clang 10-amount.c  -o  10-amount -lcs50 -lm

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/