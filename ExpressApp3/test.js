function getPercentMatch() {
            var maxElem = Math.max.apply(null, arr);
            lArray.forEach(function(item, arr) {
                var resultPercent = (item * 100)/maxElem;
                console.log(resultPercent);
            }
            )};

            getPercentMatch();