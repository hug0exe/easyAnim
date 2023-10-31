(function($) {
    $.fn.artics = function(options) {
        const settings = $.extend({
            "source": null,
            "trigger": "keyboard",
            "target": null,
            "combinaison": null,
            "position": "center",
            "customPosition": null,
            "animation": "static"
        }, options);

        let typedKeys = "";

        const showGif = () => {
            const gifElement = document.createElement('img');
            gifElement.src = settings.source;
            gifElement.style.zIndex = '1000';

            switch (settings.position) {
                case "center":
                    gifElement.style.position = 'fixed';
                    gifElement.style.left = '50%';
                    gifElement.style.top = '50%';
                    gifElement.style.transform = 'translate(-50%, -50%)';
                    break;
                case "bottom":
                    gifElement.style.position = 'absolute';
                    gifElement.style.left = '50%';
                    gifElement.style.bottom = '0';
                    gifElement.style.transform = 'translateX(-50%)';
                    break;
                case "top":
                    gifElement.style.position = 'absolute';
                    gifElement.style.left = '50%';
                    gifElement.style.top = '0';
                    gifElement.style.transform = 'translateX(-50%)';
                    break;
                case "custom":
                    if (settings.customPosition) {
                        gifElement.style.position = 'fixed';
                        const [top, left] = settings.customPosition.split(' ');
                        gifElement.style.top = top;
                        gifElement.style.left = left;
                    }
                    break;
            }

            // TODO: Add animations based on settings.animation

            document.body.appendChild(gifElement);

            setTimeout(() => {
                gifElement.remove();
            }, 1500);
        };

        if (settings.trigger === "keyboard") {
            $(document).on('keyup', (e) => {
                typedKeys += e.key;
                if (typedKeys.includes(settings.combinaison)) {
                    showGif();
                    typedKeys = "";
                }
                if (typedKeys.length > 30) {
                    typedKeys = "";
                }
            });
        } else if (settings.trigger === "click" && settings.target) {
            $(settings.target).on('click', showGif);
        } else if (settings.trigger === "hover" && settings.target) {
            $(settings.target).on('mouseenter', showGif);
        }

        return this; // Return to allow chaining
    };
}(jQuery));
