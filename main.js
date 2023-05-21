
        function submitUserInfo() {
            const birthYear = prompt('Будь ласка, вкажіть рік Вашого народження', '1990');
            if (birthYear === null) {
                alert(`Шкода, що Ви не захотіли ввести свій рік народження`);
            }
            let residenceCity = prompt('Будь ласка, вкажіть місто, в якому Ви живете');
            if (residenceCity === null) {
                alert(`Шкода, що Ви не захотіли вказати місто, в якому живете`);
            } else {
                residenceCity = residenceCity.toLowerCase();
            }
            let country;
            switch (residenceCity) {
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
            if (birthYear === null || residenceCity === null || sport === null) {
                alert('Недостатньо даних');
            } else {
                if (Boolean(champion) && Boolean(country)) {
                    alert(`${2023 - birthYear} років. Ви живете у столиці ${country}. Круто! Хочете стати ${champion}?`);
                } else if (Boolean(country)) {
                    alert(`${2023 - birthYear} років. Ви живете у столиці ${country}.`);
                } else if (Boolean(champion)) {
                    alert(`${2023 - birthYear} років. Ви живете у місті ${residenceCity}. Круто! Хочете стати ${champion}?`);
                } else {
                    alert(`${2023 - birthYear} років. Ви живете у місті ${residenceCity}.`);
                }
            }
        }
