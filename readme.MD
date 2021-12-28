# Challenge for logic practice.

### Pseudocode

ATM extract Algorithm

1. Create a key-value structure (Object in JS) with money tickets denomination and their available tickets as values.
2. Read the asked money to extract.

3. A) If value to extract is greater than money available (function calculateTotalAvailable()) show a message "This ATM don't have the money asked, money available : _MONEY AVAILABLE_ and end the algorithm.

B) If money available is greater:
i) Loop through money available object.
ii) Call the function obtainDenomination() to calculate how many tickets return.
iii) Store the quantity of tickets x denomination.
iv) Return the result.
v) End the algorithm.

==================================== FUNCTIONS ===================================

Function calculateTotalAvailable()

1. Loop through the object.
2. Multiply the ticket denomination by the quantity available.
3. Store and add it to a variable called Total.
4. Returns the result of Total variable.

Function obtainDenomination()

1. Divide between the askedAmountToExtract and the ticket denomination to obtain the tickets quantity.
2. If tickets quantity is greater than quantity available, assign the quantity available.
3. Substract the amount available of the denomination the quantity obtained.
4. Return the quantity.
