const Discord = require("discord.js")
2. 
3. const client = new Discord.Client()
4. 
5.  
6.  
7.  
8.  
9. client.on("message", Drzheer => {
10. 
11.   if(Drzheer.content.includes("discord.gg")){
12. 
13.     if(Drzheer.channel.type === "dm"){
14. 
15.       if(Drzheer.author.id===Drzheer.user.id) return;
16. 
17. let embed = new Discord.RichEmbed()
18. 
19. .setColor("RANDOM")
20. 
21. .setTimestamp()
22. 
23. .setTitle("> 📢``` ڕیــکــلامەکـە کـرا جـەرگـم```")
24. 
25. .addField('> ⚠```نـێـردرەوە لـە لایـەن```',`<@${Drzheer.author.id}>`)
26. 
27. .setDescription(Drzheer.content)
28. 
29. .setFooter(`${Drzheer.author.tag}`)
30. 
31. .setAuthor(Drzheer.author.tag,Drzheer.author.avatarURL)
32. 
33. .setImage("")
34. 
35. client.channels.get("ID CHANNEL").send(embed)
36. 
37.  
38.  
39.     }}})
40. 
41.  
42.  
43. client.login("token")
