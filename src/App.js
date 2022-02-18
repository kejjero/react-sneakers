function App() {
  return (
    <body className="root">
        <div className="page">
            <header className="header">
                <div className="header__wrapper">
                <a className="header__left" href="">
                    <img src="./img/header__logo.svg" className="header__logo" alt="logo"/>
                    <div className="header__box-title">
                        <h1 className="header__title">REACT SNEAKERS</h1>
                        <p className="header__subtitle">Магазин лучших кроссовок</p>
                    </div>
                </a>
                <nav className="header__right">
                    <a className="header__basket-box" href="#">
                        <img src="./img/header__basket.svg" className="header__basket-img" alt="basket"/>
                        <p className="header__value">1205 руб.</p>
                    </a>
                    <a className="header__favourites" href="#">
                        <img src="./img/header__favourites.svg" className="header__favourites-img" alt="favourites"/>
                    </a>
                    <a className="header__profile" href="#">
                        <img src="./img/header__profile.svg" className="header__profile-img" alt="profile"/>
                    </a>
                </nav>
                </div>
            </header>
            <main className="content">
                <section className="sneakers">
                    <h1 className="sneakers__title">Все кроссовки</h1>
                    <div className="cards">

                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_1.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_2.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_3.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_4.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_5.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_6.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_7.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                        <article className="card">
                            <img className="card__like" src="img/card__like-button.svg"/>
                            <img className="card__image" src="img/card__image_8.jpg"/>
                            <h2 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h2>
                            <div className="card__price-container">
                                <p className="card__price">Цена</p>
                                <p className="card__value">12 999 руб.</p>
                            </div>
                            <img className="card__add-button" src="img/card__add-button.svg"/>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    </body>
  );
}

export default App;
