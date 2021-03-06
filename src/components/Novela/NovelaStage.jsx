import React from 'react';
import './NovelaStage.scss';

const NovelaStage = () => {

    return (
        <div className="stage">
            <div className="stage-message">
                <span>Aquí se mostrarán los mensajes...</span>
            </div>

            <div className="stage-character">
                <img src="https://i.pinimg.com/originals/55/6b/bd/556bbd57bb1d10813cb74744a573db33.png" alt="Kokichi Sprite" />
            </div>

            <div className="stage-character-name">
                <span>Kokichi Oma</span>
            </div>

            <div className="novel-decisions">
                <label htmlFor="decision1" className="novel-decision-radio" id="labeldecision1">
                    <input type="radio" id="decision1" name="decision" value="1" />
                    <span className="novel-decision-info">
                        Esta es una decisión
                            </span>
                </label>
                <label htmlFor="decision2" className="novel-decision-radio" id="labeldecision2">
                    <input type="radio" id="decision2" name="decision" value="2" />
                    <span className="novel-decision-info">
                        Esta es una decisión
                            </span>
                </label>
                <label htmlFor="decision3" className="novel-decision-radio" id="labeldecision3">
                    <input type="radio" id="decision3" name="decision" value="3" />
                    <span className="novel-decision-info">
                        Esta es una decisión
                            </span>
                </label>
                <label htmlFor="decision4" className="novel-decision-radio" id="labeldecision4">
                    <input type="radio" id="decision4" name="decision" value="4" />
                    <span className="novel-decision-info">
                        Esta es una decisión
                            </span>
                </label>
            </div>
        </div>
    );
};

export default NovelaStage;