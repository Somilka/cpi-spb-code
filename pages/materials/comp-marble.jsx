import MainLayout from "../../layouts/MainLayout";

export default function CompMarble() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Композитный мрамор</div>
            </div>
            <div className="content">
                <div className="block full">
                    <h2>
                        Варианты цветов подоконников
                    </h2>
                </div>
                <div className="block full">
                    <div className="colors">
                        <img className="marble-img" src='/static/materials/marble/marble1.png' alt="" />
                        <img className="marble-img" src='/static/materials/marble/marble2.png' alt="" />
                        <img className="marble-img" src='/static/materials/marble/marble3.png' alt="" />
                        <img className="marble-img" src='/static/materials/marble/marble4.png' alt="" />
                        <img className="marble-img" src='/static/materials/marble/marble5.png' alt="" />
                        <img className="marble-img" src='/static/materials/marble/marble6.png' alt="" />
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="block hl bigger-gap">
                    <img src="/static/materials/marble/comp_marble2.png" alt="" className="hl" />
                    <div className="block"><h2>Не смотря на простоту технологического процесса, он так же скрывает в себе множество тонкостей, таких как:</h2>
                        <ul>
                            <li>Толщина необходимого слоя гелькоута. При несоблюдении необходимых параметров, на верхнем слое могут появиться микротрещины, в которые будет попадать влага и грязь.</li>
                            <li>При подготовке смеси из песка и смолы в смолу необходимо добавить катализатор, что бы она затвердела. Количество катализатора должно быть строго отмерено, т.к. при его избытке смола может воспламениться, а при недостатке она окончательно не «встанет» и изделие получиться мягки.</li>
                            <li>Все процедуры должны выполняться при определенной температуре и влажности в помещении. Это так же влияет на эксплуатационные свойства материала.</li>
                        </ul></div>
                </div>
                <div className="block hr bigger-gap">
                    <div className="block">
                        <h2>Состав композитного мрамора:</h2>
                        <p>
                        Композитный мрамор состоит на 85% из натурального наполнителя – кварцевого песка. Выбор кварцевого песка для изготовления изделий – тонкий момент, требующий знания множества нюансов. Кварцевый песок влияет на два важнейших свойства изделия: его прочность и цвет.<br/>
                            Для того, чтобы изделие было наиболее прочным, кварцевый песок должен иметь определенный уровень влажности на момент изготовления композитного мрамора, т.к. влажность имеет прямое влияние на адгезию (прилипание) материалов. Поэтому важно не только найти песок с необходимым уровнем влажности, но и иметь возможность для его правильной транспортировки и хранения.<br/>
                            На 14% композитный мрамор состоит из связующего материала – полиэфирной смолы. Качество полиэфирной смолы и уровень мастеров, работающих с ней, имеет, так же, как и песок, большое влияние на качество получаемого изделия. Мы используем финскую смолу. Не смотря на ее дорогую стоимость, за счет ее качества количество брака, при ее использовании, сводится к минимуму, а качество продукта (прочность, цвет) удовлетворяет всем эксплутационным и эстетическим правилам.<br/>
                            1% в составе композитного мрамора – гелькоут или жидкое стекло. Гелькоут – защитно-декоративный слой. Именно от него зависит эстетика и износостойкость композитного мрамора. Наша компания использует самый дорогой на сегодняшний день Итальянский гелькоут. Он абсолютно износостоек, что подтверждают испытания в реальной жизни. Ступени из нашего камня три года стоят в городской поликлинике №32 на Вяземском переулке и за три года они не утратили ни практических, ни эстетических свойств, за что главврач поликлиники подписала для нас благодарственное письмо.<br/>
                        </p>
                    </div>
                    <div className="block">
                    <h2>Технология производства:</h2>
                        <ol>
                            <li>Подготавливается форма для литья.</li>
                            <li>На форму наноситься гелькоут.</li>
                            <li>Гелькоут сохнет 24 часа</li>
                            <li>Готовиться смесь для заливки состоящая из кварцевого песка и полиэфирной смолы</li>
                            <li>Смесь выливается в форму, с нанесенным предварительно гелькоутом</li>
                            <li>Форма помещается в полимеризационную камеру для формирования изделия на 24 часа</li>
                            <li>Изделие вынимается из формы</li>
                            <li>Полировка</li>
                            <li>Упаковка</li>
                        </ol>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};