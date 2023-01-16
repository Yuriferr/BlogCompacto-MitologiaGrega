import React from "react";
import "./App.scss";

import { Mousewheel, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";

import Zeus from "./assets/zeus.jpg";
import Hera from "./assets/hera.png";
import Poseidon from "./assets/poseidon.jpg";
import Atena from "./assets/atena.png";
import Ares from "./assets/ares.png";
import Demeter from "./assets/demeter.png";
import Apolo from "./assets/apolo.png";
import Artemis from "./assets/artemis.png";
import Hefesto from "./assets/hefesto.png";
import Afrodite from "./assets/afrodite.png";
import Hermes from "./assets/hermes.png";
import Dionisio from "./assets/dionisio.png";

import Logo from "./assets/LogoSemFundo.png";
import LogoMitologia from "./assets/logoMitologia.png";

import Background from "./assets/background.png";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { toast , ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const deuses = [
    {
      name: "Zeus",
      info: "Nascido na ilha de Creta e criado na caverna no monte Ida, Zeus é filho mais novo de Cronos e Reia. Ele teve cinco irmãos: Héstia, Hades, Hera, Poseidon e Deméter. Além disso, teve diversas esposas e filhos, sendo sua união mais conhecida com Hera, sua irmã.",
      img: Zeus,
    },
    {
      name: "Hera",
      info: "Filha de Cronos e Reia, Hera é a irmã e esposa de Zeus. Considerada a rainha dos deuses, era também cultuada como deusa da maternidade, do casamento e das mulheres.Com um temperamento difícil, Hera era muito fiel e não teve casos extraconjugais, como seu marido, Zeus.",
      img: Hera,
    },
    {
      name: "Poseidon",
      info: "Filho de Cronos e Reia, Poseidon é o deus dos mares, das tempestades e dos terremotos. Isso porque tem como característica um comportamento violento e instável. Como é o deus dos mares, em algumas versões ele habita as profundezas do oceano.",
      img: Poseidon,
    },
    {
      name: "Atena",
      info: 'Filha de Zeus e Métis, Atena, também chamada de "Palas Atena", é a deusa da sabedoria e das artes. Em algumas versões, ela nasceu da cabeça de Zeus e por isso, era muito inteligente. Protetora das cidades, Atena era uma guerreira que já nasceu armada com um escudo e um capacete.',
      img: Atena,
    },
    {
      name: "Ares",
      info: "Filho de Zeus e Hera, Ares era o deus da guerra e meio-irmão de Atena. Possuía um temperamento muito selvagem, típico de sua figura belicosa. Teve um relacionamento com Afrodite que era esposa de Hefesto e por isso, foi banido do Monte Olimpo durante um tempo",
      img: Ares,
    },
    {
      name: "Deméter",
      info: "Filha de Cronos e Reia, Deméter era a deusa das estações e da agricultura. Com seu irmão Zeus, ela teve uma filha chamada Perséfone, que foi raptada por Hades, o deus do submundo.",
      img: Demeter,
    },
    {
      name: "Apolo",
      info: "Irmão gêmeo de Ártemis, Apolo é filho de Zeus e de Leto. Nascido na ilha de Delos, ele é Deus do sol, das artes, da profecia, da ordem e da justiça, sendo um dos deuses mais cultuados do Olimpo.",
      img: Apolo,
    },
    {
      name: "Ártemis",
      info: "Filha de Zeus e Leto, Ártemis era irmã gêmeo de Apolo. Deusa da caça, dos animais, da vida selvagem, da virgindade e da Lua, ela possuía um temperamento vingativo, mas, por outro lado, era protetora e amorosa.",
      img: Artemis,
    },
    {
      name: "Hefesto",
      info: "Filho de Zeus e Hera, Hefesto é o deus do fogo e dos metais. Foi um grande forjador e trabalhava próximo dos vulcões com a ajuda dos gigantes de um olho só, os ciclopes.",
      img: Hefesto,
    },
    {
      name: "Afrodite",
      info: "Filha de Zeus e Dione, Afrodite é deusa do amor, da beleza e da sexualidade. Muito bela, ela foi obrigada a casar com Hefesto mas ele não lhe agradava e, portanto, o traiu com Ares.",
      img: Afrodite,
    },
    {
      name: "Hermes",
      info: "Mensageiro dos deuses, Hermes era filho de Zeus e da ninfa Maia. Seu nome está associado a diversos atributos como o comércio, a riqueza, a sorte, a magia, as viagens, as estradas e os ladrões.",
      img: Hermes,
    },
    {
      name: "Dionísio",
      info: "Também chamado de Dioniso, esse era o deus do vinho e das festas. Filho de Zeus e Sêmele, sua mãe sofreu uma armadilha de Hera e nesse episódio, ela acabou morrendo e seu corpo foi desfeito em diversos pedaços.",
      img: Dionisio,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function Alert(){
    toast("🦄Obrigado por utilizar este site!!!");
  }

  return (
    <div className="App">
      <header>
        <a href="">
          <div className="logos">
            <img className="logoMit" src={LogoMitologia} />
            <p>Blog do Olimpo</p>
          </div>
        </a>
        <a target="_blanck" href="https://github.com/Yuriferr">
          <img className="logo" src={Logo} />
        </a>
        <div>
          <Button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="links"
          >
            Links
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <a href="mailto:yurifernandespreto@gmail.com"><MenuItem onClick={handleClose}>Email</MenuItem></a>
            <a target="_blanck" href="https://www.linkedin.com/in/yuriferr" >
              <MenuItem onClick={handleClose}>Linkedin</MenuItem>
            </a>
            <a target="_blanck" href="https://github.com/Yuriferr"><MenuItem onClick={handleClose}>GitHub</MenuItem></a>
          </Menu>
        </div>
      </header>

      <section style={{ backgroundImage: `url(${Background})` }}>
        <Swiper
          spaceBetween={30}
          effect="fade"
          pagination={{
            clickable: true,
            el: ".page",
            type: "bullets",
          }}
          mousewheel={{ invert: false }}
          modules={[Pagination, EffectFade, Mousewheel]}
          fadeEffect={{ crossFade: true }}
        >
          {deuses.map((items, index) => {
            return (
              <SwiperSlide key={index} className="swiperSlide">
                <div className="container">
                    <div className="image">
                      <img src={items.img} alt="" />
                    </div>
                    <div className="info">
                      <h1>{items.name}</h1>
                      <p>{items.info}</p>
                      <button onClick={Alert}>Click Me!</button>
                      <div className="containerPagination">
                        <div className="page" />
                      </div>
                    </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
