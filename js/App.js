/**
 * Created with JetBrains WebStorm.
 * Project: DownloadMp3
 * User: Sergii Danilov
 * Date: 5/7/13
 * Time: 4:22 PM
 */
/*global $:true */
var App = App || {};

App.Main = {
    init: function () {
        'use strict';
        var me = this;
        $('#inputTextBtn').on('click', me.clickSay);
        $('#inputText').on('click', function () {
            this.select();
        });
    },
    clickSay: function () {
        'use strict';
        var me = this,
            text = $('#inputText').val(),
            url,
            sound;
        if (text.length > 0) {
            sound = App.StringOpperations.slugifySound(text);
            text = App.StringOpperations.slugify(sound);
            url = 'http://translate.google.com/translate_tts?ie=UTF-8&q=' + sound + '&tl=en';
            $('#audio').attr(
                'src',
                url
            );
            $('#downloadBtn').attr(
                'href',
                url
            );
            $('#downloadBtn').attr(
                'download',
                text + '.mp3'
            );
        }
    }
};

App.Main.init();