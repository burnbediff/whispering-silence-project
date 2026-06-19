export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/14864d04-7967-4329-83a1-be36c986c09f/files/7cfba20a-6cf0-47f2-9018-1e17c99e2eee.jpg"
          alt="Нейро-портрет"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Фотосессия без фотографа</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Загрузите несколько своих фото — и нейросеть создаст десятки профессиональных портретов в любом стиле:
          деловые, креативные, атмосферные. Без студии, без ожиданий.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать фотосессию
        </button>
      </div>
    </div>
  );
}