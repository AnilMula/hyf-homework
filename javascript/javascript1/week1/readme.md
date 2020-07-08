# Readme
##Age-ify (A future age calculator)##
You are talking to a friend who suddently looks at you and asks: "How old will you be in 2045?" Hmm you remember the year you were born and try to do some calculation: Born in 1987 + 3 that's 1990. 90 - 40 is 50 + 5 thats 58. I will be 58! Wow that was painful! Let's fix that by making some code that automatically does this!

Create two variables called yearOfBirth and yearFuture. Assign these your own age and a future year. What type will these two variables be? Now calculate the age and store that in a variable called age. Log out this string: "You will be 40 years old in 2027". With 40 being the result of the age variable and 2027 being the yearFuture variable. (Hint use string concatenation)

##Goodboy-Oldboy (A dog age calculator)
The same friend (who by the way loves dogs) asks how old his dog will be in 2045. Hmm you think, lets make this into a product as well! Dogs age can either be measured in dog years or in human years, this we want to take into consideration!

Like before lets create three variables but this time we call them dogYearOfBirth, dogYearFuture and dogYear. We add an extra variable called shouldShowResultInDogYears. If it is true we should show the result in dog years, if it is false we should show it in human years. What do we call this type of variable? Now log this string out: "Your dog will be 10 human years old in 2027" or "Your dog will be 70 dog years old in 2027"

##Housey pricey (A house price estimator)
Two of your friends are considering buying a house, but cannot figure out what the right price should be. Your friends know the width, the height and the depth of the house and the garden size. Lets help them figure out if they paid too much:

We have made our own formula for calculating the price of a house. This formula is VERY simplified and not at all close to the real calculation which can get quite complicated:

housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. The garden size is 70m2. This house costs 1.000.000.

Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.

##Ez Namey (Startup name generator) Optional
At a meetup you overhear a conversation between two developers. It went something like this: "Man i wish picking a startup name was easier! You need to be creative, funny and interesting, its nearly impossible!" Another problem to solve, awesome!

Lets help people who struggle finding a startup name by creating some code!

Create two arrays called firstWords, secondWords. The arrays should have 10 elements containing strings of possible startup names. Some examples could be: "Easy", "Awesome", "Corporate". Create a variable called startupName that will contain created startup name.
Using a random index (you choose) of the arrays and concatenation of strings, create and log the new startup name and the number of characters in it. An example could be: "The startup: "Easy Corporation" contains 16 characters"

**Hint:** you can use this code to generate a random number from 0-9, if you dont want to specify the indexes yourself.

const randomNumber = Math.floor(Math.random() * 10) + 0
