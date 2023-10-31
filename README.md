# easyAnim
Repo to add easy animation and gif to your website or project

<script>
    $('body').artics({
        "source": "https://media3.giphy.com/media/HGQ4RWHYtw9Dmhj7mk/giphy.gif", the url of the gif you want to add
        "trigger": "keyboard", // keyboard, click, hover
        "target": null, // if click or hover : id or class of the element, if keyboard : null
        "combinaison": "VKRZ", // if click or hover : null
        "position": "center", // center - bottom - top - custom
        "customPosition": null, // if position is custom : 0px 0px, else is null
        'animation': "static" // static - topToBottom - bottomToTop - leftToRight - rightToLeft
    })
</script>