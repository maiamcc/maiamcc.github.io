*Name:* Maia Remez McCormick

*E-mail address:* maia.mcc@gmail.com

*IRC Nick:* maiamcc

*Web Page / Blog / Microblog (e.g. Twitter) / Portfolio:* http://maiamcc.github.io/

*Location:* New York City

*Education completed or in progress (include university, major/concentration, degree level, and graduation year):*

Hacker School (July-October 2014); Williams College (BA in Music, class of 2014)

*How did you hear about this program?*

It was recommended by the Hacker School administration, as well as several Hacker School alumni who have been involved in OPW in some way or another (including Sumana Harihareswara, past mentor/org admin/career advisor, and Lyndsey Moulds, past participant)

*Please describe your experience with the organization's product as a user and as a contributor (include the information, as well as a link or an attachment, for the required contribution you made to the project you are interested in here):*

I submitted a bug fix to GNOME Music bug #729378, "Disregard 'the' in titles." My fix consisted of changes to the `ORDER BY` statements in Query.artists() and Query.albums() so that if the artist/album name began with 'the', it would be sorted by the following word instead. In subsequent fixes for this bug, I plan to write a function that generates the appropriate `ORDER BY` statement (based on which categories to sort by and which do/don't need to disregard 'the'), which can be inserted into the query via string formatting; and then modify this function so that it can operate in different languages.

Bug page: https://bugzilla.gnome.org/show_bug.cgi?id=729378
Patch: https://bug729378.bugzilla-attachments.gnome.org/attachment.cgi?id=289149

This project caught my eye for several reasons:

1) Most mundanely, it's written in Python, which is my primary language.
2) Outside of programming, most of my training and career experience is in music. That means that not only do I have a vested interest in making an excellent, user-friendly, and free-and-open-source music player, I have quite a bit of specialized knowledge of music to bring to the question of making smart playlists.
3) Relatedly, given the amount of music in my life, I've been growing increasingly frustrated with iTunes, its proprietary nature, and the questionable UX that keeps getting foisted on me with every update. I want to be a part of an alternative that has smarter design, better UX, and puts more control in the hands of its users.

*Please describe your experience with any other FOSS projects as a user and as a contributor:*

I use bpython for most of my Python work. I got many glimpses of the development process as I spent time at Hacker School with Tom Ballinger, a devoted developer of bpython-curtsies: I gave him many (verbal) bug reports and watched bug fixes over his shoulder. Additionally, I use Audacity for audio editing and occasionally use iPython, SelfControl, and VLC. (Also, Bash and Git, obviously.)

*Please describe any relevant projects that you have worked on previously and what knowledge you gained from working on them (include links):*

My most relevant past project is probably my database of contradance choreographies (very much a work in progress). Built in Python using Django, this project taught me about interacting with databases (albeit through a Python ORM), the logic behind models, and how to interact with large, multi-part projects.

Link: https://github.com/maiamcc/contradb

*What project(s) are you interested in (these can be in the same or different organizations)?*

Smart Playlists in GNOME Music (and misc. side projects in GNOME Music--code clean-up and documentation, query templating etc.)

*Who is a possible mentor for the project you are most interested in?* Vadim Rutkovsky

*Please describe the details and the timeline of the work you plan to accomplish on the project you are most interested in (discuss these first with the mentor of the project):*

December - work with designers and understand playlist structure and SPARQL language; code clean-up, query templating
January - initial implementation of smart playlists
February/March - fixing issues and broader implementation

*Will you have any other time commitments, such as school, work, another job, planned vacation, etc., between December 9, 2014 and March 9, 2015?*

No, except for a week or two of vacation around Christmas/New Year's.
