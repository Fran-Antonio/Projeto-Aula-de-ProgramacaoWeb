import produto1 from "../assets/moto.jpg";
import produto2 from "../assets/moto2.jpg";
import produto3 from "../assets/moto3.jpg";

import bannerCarro from "../assets/bannerCarro.png";
import bannerPecas from "../assets/bannerPecas.png";
import { useEffect, useState } from "react";
function Home() {
  /* === Banner == */

  const banners = [bannerCarro, bannerPecas];
  const [bannerAtual, setBannerAtual] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setBannerAtual((anterior) =>
        anterior === banners.length - 1 ? 0 : anterior + 1,
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const produtos = [
    {
      id: 1,
      nome: "Filtro de Ar Esportivo",
      descricao: "Maior fluxo de ar e visual esportivo para o motor.",
      preco: "R$ 189,90",
      imagem: produto1,
    },
    {
      id: 2,
      nome: "Manômetro de Turbo",
      descricao: "Monitoramento preciso da pressão do turbo.",
      preco: "R$ 249,90",
      imagem: produto2,
    },
    {
      id: 3,
      nome: "Kit de Admissão Esportiva",
      descricao: "Sistema de admissão para melhorar fluxo e resposta do motor.",
      preco: "R$ 499,90",
      imagem: produto3,
    },
  ];

  const categorias = [
    {
      nome: "Filtros",
      subcategorias: [
        "Filtro de Ar",
        "Filtro Esportivo",
        "Filtro de Oléo",
        "Filtro de Combustivel",
      ],
    },
    {
      nome: "Turbo",
      subcategorias: [
        "Turbinas",
        "Intercooler",
        "Válvula Blow Off",
        "Wastegate",
      ],
    },
    {
      nome: "Suspensão",
      subcategorias: [
        "Molas Esportivas",
        "Coilover",
        "Amortecedores",
        "Barras Estabilizadoras",
      ],
    },
    {
      nome: "Freios",
      subcategorias: ["Discos", "Pastilhas", "Pinças", "Fluido de Freios"],
    },
    {
      nome: "Escape",
      subcategorias: ["Abafadores", "Ponteiras", "Downpipe", "Coletor"],
    },
    {
      nome: "Injeção",
      subcategorias: ["Abafadores", "Ponteiras", "Downpipe", "Coletor"],
    },
    {
      nome: "Rodas",
      subcategorias: ["Rodas Esportivas", "Pneus", "Espaçadores", "Parafusos"],
    },
    {
      nome: "acessórios",
      subcategorias: ["Volantes", "Manoplas", "Pedaleiras", "Iluminação"],
    },
  ];

  return (
    <>
      <section className="store-top">
        <div className="store-search">
          <input
            type="text"
            placeholder="Busque peças, acessórios ou marcas..."
            className="store-search__input"
          />

          <button className="store-search__button"></button>
        </div>

        <div className="store-actions">
          <button className="store-action"> Favoritos</button>
          <button className="store-action"> Carrinho</button>
        </div>
      </section>

      <section className="categorias">
        <button className="categorias__departamentos">Departamentos</button>

        <div className="categorias__lista">
          {categorias.map((categoria) => (
            <div className="categoria-dropdown" key={categoria.nome}>
              <button className="categoria-item">
                {categoria.nome}
                <span className="seta">⌄</span>
              </button>

              <div className="submenu">
                {categoria.subcategorias.map((subcategoria) => (
                  <a href="#" key={subcategoria}>
                    {subcategoria}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="banner"
        style={{ backgroundImage: `url(${banners[bannerAtual]})` }}
      >
        <div className="overlay"></div>

        <div className="banner__content">
          <span className="banner__tag">Performance Automotiva</span>

          <h1>Peças para quem leva desempenho a sério</h1>

          <p>
            Encontre peças e acessórios para melhorar desempenho, visual e
            dirigibilidade do seu carro.
          </p>

          <div className="banner__buttons">
            <button className="btn-primary">Ver produtos</button>

            <button className="btn-secondary">Falar no WhatsApp</button>
          </div>
        </div>
      </section>

      <section className="beneficios">
        <div className="beneficio">
          <span>--</span>
          <div>
            <strong>Entrega para todo Brasil</strong>
            <p>Consulte prazo para sua região</p>
          </div>
        </div>

        <div className="beneficio">
          <span>--</span>
          <div>
            <strong>Pagamento facilitado</strong>
            <p>Parcelamento disponível</p>
          </div>
        </div>

        <div className="beneficio">
          <span>--</span>
          <div>
            <strong>Compra segura</strong>
            <p>Proteção dos seus dados</p>
          </div>
        </div>

        <div className="beneficio">
          <span>🔧</span>
          <div>
            <strong>Suporte especializado</strong>
            <p>Ajuda na escolha da peça</p>
          </div>
        </div>
      </section>

      <section className="destaques">
        <div className="destaques__topo">
          <span className="destaques__tag">Produtos em destaque</span>

          <h2>Performance, estilo e qualidade</h2>

          <p>
            Confira alguns dos principais produtos para preparação e
            personalização automotiva.
          </p>
        </div>

        <div className="motos-grid">
          {produtos.map((item) => (
            <div className="moto-card" key={item.id}>
              <div className="moto-card__image-wrapper">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="moto-card__img"
                />
              </div>

              <div className="moto-card__body">
                <h3 className="moto-card__title">{item.nome}</h3>

                <p className="moto-card__desc">{item.descricao}</p>

                <div className="moto-card__footer">
                  <span className="moto-card__preco">{item.preco}</span>

                  <button className="moto-card__btn">Ver produto</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
