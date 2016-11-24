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
        small: "<p>Maia lives in NYC and makes things on computers and on the internet (generally in Go, Javascript, or Python). When she’s not making things on computers, she’s usually singing, dancing, or eating good food.</p>",
        med: "<p>Maia is currently a backend software engineer at <a href='//www.shopspring.com/'>Spring</a>, a mobile shopping app based in New York City. Before that, she was an intern with GNOME via <a href='//www.gnome.org/outreachy/'>Outreachy</a> (formerly OPW), working on <a href='//wiki.gnome.org/Apps/Music'>GNOME Music</a>. Born and raised in NYC, Maia graduated from Williams College in 2014 with a B.A. in music. From there, she went to the <a href='//www.recurse.com/'>Recurse Center</a> in NYC, a 3-month self-directed programmers’ retreat. At the Recurse Center, she taught herself Python and pursued a handful of personal projects. These days, she primarily works in Go, Javascript, and Python. Within programming but outside of work, she volunteers with <a href='//devprogress.us'>DevProgress</a>; outside of programming, her interests include singing, dancing, and good food.</p>",
        large: "<p>Maia first started programming in an Intro CS class her senior year at Williams College, and got really excited about programming later that year, when she participated in the Williams College Game Jam (for which she made <a href='/projects/gravity/play.html'>Gravity</a>). After graduating from Williams in 2014 with a B.A. in music, she went to the <a href='//www.recurse.com/'>Recurse Center</a>, a 3-month self-directed programmers’ retreat in New York City. There she taught herself Python and hacked on various things. After her stint at the Recurse Center, Maia interned for GNOME via <a href='//www.gnome.org/outreachy/'>Outreachy</a> (formerly OPW), working on <a href='//wiki.gnome.org/Apps/Music'>GNOME Music</a>, and she's settled down for the time being as a software engineer at <a href='//www.shopspring.com/'>Spring</a>, a mobile shopping app based in NYC. She directs her extra programming energies towards <a href='//devprogress.us'>DevProgress</a> and pairing with friends to keep in shape. When not programming, Maia can usually be found singing, conducting, composing, dancing, cooking, or eating. She was born and raised in New York City, where she is currently based.</p>",
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
  <p><strong>Twitter</strong>: <a href="//twitter.com/maia_mcc">@maia_mcc</a></p>
  <p><strong>Github</strong>: <a href="//github.com/maiamcc/">maiamcc</a></p>
  <p><strong>Other Hats</strong>: I moonlight as a <a href="//contra.maiamccormick.com">contradance caller</a> in and around the Northeast</p>
</div>

