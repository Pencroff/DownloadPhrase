/**
 * Created with JetBrains WebStorm.
 * Project: DownloadMp3
 * User: Sergii Danilov
 * Date: 5/7/13
 * Time: 3:59 PM
 */

var App = App || {};

App.StringOpperations = {
    slugify: function (text) {
        'use strict';
        text = text.toLowerCase();
        text = text.trim();
        text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '-');
        text = text.trim();
        text = text.replace(/\s/gi, '-');
        text = text.replace(/-+/gi, '-');
        //text = text.replace(/--/gi, '-');
        //text = text.replace(/--/gi, '-');
        return text;
    },
    slugifySound: function (text) {
        'use strict';
        text = text.toLowerCase();
        text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, ' ');
        text = text.replace(/[\s-]+/, ' ');
        text = text.replace(/\s+/gi, ' ');
        text = text.trim();
        return text;
    }
}
