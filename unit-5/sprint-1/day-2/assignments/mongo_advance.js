1.Find all the countries in region "Asia"?
db.data.find({"region":"Asia"})

2.Find all the countries with currency: "EUR"?
db.data.find({"currency":"EUR"})

3.Find all the countries whose timezone's gmtOffset is 3600?
db.data.find({"timezones.gmtOffset":3600})

4.Find all the countries whose timezone's gmtOffset is 3600 AND timezone name is Central European Time (or CET)?
db.data.find({"timezones.gmtOffset":3600,"timezones.tzName":"Central European Time"})

5.Find All the countries with more than 1 time zone (hint: size of array)?
db.data.find({"timezones.1":{$exists:true}})

6.Find All the countries with "Korean" translation (KR)?
db.data.find({"translations.kr":{$exists:true}})