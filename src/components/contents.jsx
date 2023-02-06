import React from "react";
import "./styles/contents.css";

const Contents = () => {
  return (
    <div className="contents-container container">
      <div className="subheading">What's in this kit?</div>
      <div className="desc">
        This starter kit is all you need to start the revolution.
      </div>
      <div className="item-container">
        <img
          src="https://static.wixstatic.com/media/ead566_be02f988bdbf4654aebc7157d8b809ea~mv2.jpg/v1/fill/w_1000,h_562,al_c,q_85/ead566_be02f988bdbf4654aebc7157d8b809ea~mv2.webp"
          className="item-image"
        />
        <div className="item-desc left">
          <div className="item-name">
            <div class="vl-left"></div>Bamboo straws
          </div>
          <p>
            We collaborated with artisans in Vietnam, Earthly Organic Bamboo
            Straws are{" "}
            <span className="bold">100% Compostable, Vegan and BPA free</span>.
            They can be reused, thrown in a compost bin, or even in your
            backyard. Serve with cold beverages like ice tea, cold coffee and
            many more.
          </p>
        </div>
      </div>
      <div className="item-container">
        <img
          src="https://static.wixstatic.com/media/ead566_801bfc005e4c4c5e8ea3598859270a9c~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_801bfc005e4c4c5e8ea3598859270a9c~mv2.webp"
          className="item-image"
        />
        <div className="item-desc right">
          <div className="item-name">
            Plant Based Reusable Cup with 2 lids
            <div class="vl-right"></div>
          </div>
          <p>
            <span className="bold">Baristas love it!</span> <br />
            Easy to clean, hassle free and Plant Based. Sourced from local
            farmers, plant residue from Bamboo, Wheat, Rice, and Barley is
            processed and molded into reusable cups which can be used hundreds
            of times. So, every batch is unique,
            <span className="bold"> Just. Like. You.</span>
          </p>
        </div>
      </div>
      <div className="item-container">
        <img
          src="https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp"
          className="item-image"
        />
        <div className="item-desc left">
          <div className="item-name">
            <div class="vl-left"></div>Natural Bamboo Loofah
          </div>
          <p>
            Natural loofah sponges actually come from the fruits of vine-growing
            Luffa plants of the gourd family (Cucurbitaceae). When a luffa fruit
            dries out and is peeled, you are left with its fibrous interior. It
            is{" "}
            <span className="bold">
              biodegradable and is an organic, eco-friendly exfoliating body
              scrubber.
            </span>{" "}
            Both men and women can use it, suitable for shower and bathtub.
          </p>
        </div>
      </div>
      <div className="item-container">
        <img
          src="https://static.wixstatic.com/media/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_cad5cb7b64444962ade1c6fea43b525b~mv2.webp"
          className="item-image"
        />
        <div className="item-desc right">
          <div className="item-name">
            Bamboo Cotton Eartips
            <div class="vl-right"></div>
          </div>
          <p>
            We collaborated with artisans in Vietnam, Earthly Organic Bamboo
            Straws are{" "}
            <span className="bold">100% Compostable, Vegan and BPA free</span>.
            They can be reused, thrown in a compost bin, or even in your
            backyard. Serve with cold beverages like ice tea, cold coffee and
            many more.
          </p>
        </div>
      </div>
      <div className="item-container">
        <img
          src="https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.webp"
          className="item-image"
        />
        <div className="item-desc left">
          <div className="item-name">
            <div class="vl-left"></div>Bamboo Toothbrush
          </div>
          <p>
            Earthly Bamboo Toothbrush are{" "}
            <span className="bold">
              BPA free, Biodegradable and have charcoal infused bristles
            </span>{" "}
            that help remove stains effectively. We guarantee your satisfaction.
            <br />
            <span className="bold">See for yourself!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contents;
