
        function submitUserInfo() {
            const birthYear = prompt('Вкажіть, будь ласка, рік Вашого народження');
            if (birthYear === null) {
                alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
            }
            let placeOfResidence = prompt('Будь ласка, вкажіть місто, в якому Ви живете');
            if (placeOfResidence === null) {
                alert(`Шкода, що Ви не захотіли вказати місто, в якому живете`);
            } else {
                placeOfResidence;
            }
            let country;
            switch (placeOfResidence) {
                case 'київ':
                    country = 'України';
                    break;
                case 'вашингтон':
                    country = 'США';
                    break;
                case 'лондон':
                    country = 'Великої Британії';
                    break;
            }
            let sport = prompt('Будь ласка, вкажіть Ваш улюблений вид спорту');
            if (sport === null) {
                alert(`Шкода, що Ви не захотіли вказати свій улюблений вид спорту`);
            } else {
                sport = sport.toLowerCase();
            }
            let champion;
            switch (sport) {
                case 'футбол':
                    champion = 'Неманья Відіч';
                    break;
                case 'біг':
                    champion = 'Усейн Болт';
                    break;
                case 'бокс':
                    champion = 'Майк Тайсон';
                    break;
            }
            if (birthYear === null || placeOfResidence === null || sport === null) {
                alert('Недостатньо даних');
            } else {
                if (Boolean(champion) && Boolean(country)) {
                    alert(`${2023 - birthYear} років. Ви живете у столиці ${country}. Круто! Хочете стати ${champion}?`);
                } else if (Boolean(country)) {
                    alert(`${2023 - birthYear} років. Ви живете у столиці ${country}.`);
                } else if (Boolean(champion)) {
                    alert(`${2023 - birthYear} років. Ви живете у місті ${placeOfResidence}. Круто! Хочете стати ${champion}?`);
                } else {
                    alert(`${2023 - birthYear} років. Ви живете у місті ${placeOfResidence}. Ваш улюблений вид спорту ${sport}`);
                }
            }
        }
