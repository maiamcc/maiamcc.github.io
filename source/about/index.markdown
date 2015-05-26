---
layout: page
title: "About me"
date: 2014-10-07 18:13
comments: false
sharing: false
footer: false
sidebar: false
---
<script type="text/javascript">
    window.bios = {
        small: "<p>Maia lives in NYC and makes things on computers and on the internet (when people are paying her, probably in Go; when they're not, probably in Python). When she’s not making things on computers, she’s usually singing or dancing.</p>",
        med: "<p>Maia is currently a software engineer at <a href='//www.shopspring.com/'>Spring</a>, a mobile shopping app based in SoHo. Before that, she was an intern with GNOME via <a href='//wiki.gnome.org/OutreachProgramForWomen'>OPW</a>, working on <a href='//wiki.gnome.org/Apps/Music'>GNOME Music</a>. Born and raised in New York City, Maia graduated from Williams College in 2014 with a B.A. in music. From there, she went to the <a href='//www.recurse.com/'>Recurse Center</a> in NYC, a 3-month self-directed programmers’ retreat. At the Recurse Center, she taught herself Python and pursued a handful of personal projects, including an <a href='//github.com/maiamcc/goob'>imitation git</a>, a(n abandoned) <a href='//github.com/maiamcc/markovgen'>part-of-speech-based Markov generator</a>, a <a href='//github.com/maiamcc/contradb'>Django database of dance choreographies</a>, and a <a href='//github.com/maiamcc/punbot'>pun bot for the chat client Zulip</a>. Her primary language is Python, and she has experience with Go, SPARQL, Django, Javascript/JQuery, and HTML/CSS/Sass. Outside of programming, her interests include singing, dancing, and good food.</p>",
        large: "<p>Maia first started programming in an Intro CS class her senior year at Williams College, and got really excited about programming later that year, when she participated in the Williams College Game Jam (for which she made <a href='/projects/gravity/play.html'>Gravity</a>). After graduating from Williams in 2014 with a B.A. in music, she went to the <a href='//www.recurse.com/'>Recurse Center</a>, a 3-month self-directed programmers’ retreat in New York City. There she taught herself Python and hacked on various things, including an <a href='//github.com/maiamcc/goob'>imitation git</a>, a(n abandoned) <a href='//github.com/maiamcc/markovgen'>part-of-speech-based Markov generator</a>, a <a href='//github.com/maiamcc/contradb'>Django database of dance choreographies</a>, and a <a href='//github.com/maiamcc/punbot'>pun bot for the chat client Zulip</a>.</p><p>After her stint at the Recurse Center, Maia interned for GNOME via the <a href='//wiki.gnome.org/OutreachProgramForWomen'>Outreach Program for Women</a> (OPW), working on <a href='//wiki.gnome.org/Apps/Music'>GNOME Music</a>, and she's settled down for the time being as a software engineer at <a href='//www.shopspring.com/'>Spring</a>, a mobile shopping app based in SoHo. Her primary language is Python, and she has experience with Go, SPARQL, Django, Javascript/JQuery, and HTML/CSS/Sass. She is particularly interested in music, feminism/activism/social justice, education, and good food, but is generally psyched to get her hands dirty with interesting problems.</p><p>When not programming, Maia can usually be found singing, conducting, composing, dancing, cooking, or eating. She was born and raised in Manhattan, where she is currently based.</p>",
    };
</script>

<script type="text/javascript" language="javascript" class="init">
  $(document).ready(function() {
    processURLHash()
  } );

  window.onhashchange = function() {
    processURLHash()
  };

  function processURLHash(){
    curHash = location.hash.slice(1);
    if (curHash == ""){
      loadBio("med")
    }
    else {
      loadBio(curHash)
    }
  }

  function loadBio(bioName){
    $('#biotext').html("") // clear
    $('#biotext').html(window.bios[bioName]) // populate
    selectOne(bioName) // highlight link as selected
  }

  function selectOne(bioName){
    $('ul li').removeClass("selected") // de-select all
    $('#'+bioName).toggleClass("selected") // select given bio
  }

</script>

<div id="biocontainer">
    <ul>
        <li id="small">
          <a href="#small" onclick="loadBio(this.hash.slice(1))">Small Bio</a>
        </li>
        <div class="spacer">
          |
        </div>
        <li id="med">
          <a href="#med" onclick="loadBio(this.hash.slice(1))">Medium Bio</a>
        </li>
        <div class="spacer">
          |
        </div>
        <li id="large">
          <a href="#large" onclick="loadBio(this.hash.slice(1))">Large Bio</a>
        </li>
    </ul>

    <div id="biotext"></div>
</div>

<div class="singlespaced">
  <p><strong>Email</strong>: maia [dot] mcc [at] gmail [dot] com</p>
  <p><strong>Github</strong>: <a href="//github.com/maiamcc/">maiamcc</a></p>
  <p><strong>IRC</strong>: maiamcc (can usually be found lurking in <a href="irc://irc.gnome.org/%23gnome-music">#gnome-music</a>, <a href="irc://irc.gnome.org/%23gnome-hackers">#gnome-hackers</a>, and <a href="irc://irc.gnome.org/%23OPW">#OPW</a> on irc.gnome.org)
</div>

