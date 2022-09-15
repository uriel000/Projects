-- Count the number of records in the people table, aliasing the result as count_records
SELECT COUNT(*) AS count_records
FROM people;

-- Count the number of records with a birthdate in the people table, aliasing the result as count_birthdate.
SELECT COUNT(birthdate) AS count_birthdate
FROM people;

-- Count the languages and countries in the films table; alias as count_languages and count_countries.
SELECT COUNT(language) AS count_languages, COUNT(country) AS count_countries
FROM films;

-- Return the unique countries from the films table
SELECT DISTINCT country
FROM films;

-- Count the distinct countries from the films table
SELECT COUNT(DISTINCT country) AS count_distinct_countries
FROM films;
