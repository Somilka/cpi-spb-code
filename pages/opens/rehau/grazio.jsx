import MainLayout from "../../../layouts/MainLayout";
import CallMasterBtn from "../../../components/Btns/CallMasterBtn/CallMasterBtn";
import CallRaschBtn from "../../../components/Btns/CallRaschBtn/CallRaschBtn";

export default function Grazio() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Rehau Grazio</div>
            </div>
            <div className="content">
                <div className="hl flex column">
                <img src="/static/opens/rehau/rehau_grazio.png" alt="" />
                <div>Отстаивая позиции на высококонкурентном рынке оконных ПВХ-профилей, компания <b>Rehau</b> обновила свою продуктовую линейку. Пластиковые окна <b>Rehau</b> традиционно славятся качеством профиля. Не стала исключением и одна из наиболее интересных новинок этого популярного европейского брэнда. Окна <b>Rehau Grazio</b> уже покорили потребителей красотой, изяществом и эргономичностью. Новая профильная система конструктивно отличается от иных профилей этой компании и заслуживает внимания.</div>
                </div>
                <div className="hr flex column jcsb h100">
                    <h3>Технические характеристики:</h3>
                    <p>Если рассматривать геометрические и технические параметры профиля Рехау Грацио, 70 мм монтажная ширина (толщина профиля) — далеко не единственное его достоинство.</p>
                    <p>Основные параметры этой системы:</p>
                    <ul>
                        <li>толщина заполнения — от 10 до 41 мм;</li>
                        <li>количество внутренних камер рамы, створки, импоста — 5;</li>
                        <li>2-контурное уплотнение по притвору;</li>
                        <li>класс звукоизоляции по ГОСТу 23166-99 — Б;</li>
                        <li>класс воздухонепроницаемости по ГОСТу 23166-99 — А;</li>
                        <li>класс водонепроницаемости по ГОСТу 23166-99 — А;</li>
                        <li>коэффициент сопротивления теплопередаче — 0,85 м2oС/Вт;</li>
                        <li>толщина наружной внешней стенки — 2,8 мм;</li>
                        <li>высота створки с нахлестом на раму — 104 мм.</li>
                    </ul>
                    <CallMasterBtn />
                    <CallRaschBtn />
                </div>
            </div>
        </MainLayout>
    );
};
