import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./AccordionSection.css";

const AccordionSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <section className="accordion">
        <div className="container">
          <div className="accordion_wrapper">
            <h1>Часто задоваемые вопросы</h1>
            <div className="acc">
              <Accordion className="Accordion-container" defaultExpanded expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="whiteIcon" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  О компании
                </AccordionSummary>
                <AccordionDetails>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </AccordionDetails>
              </Accordion>
              <Accordion className="Accordion-container" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="whiteIcon" />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Преимущества сотрудников
                </AccordionSummary>
                <AccordionDetails>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </AccordionDetails>
              </Accordion>
              <Accordion className="Accordion-container" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="whiteIcon" />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Достижения компании
                </AccordionSummary>
                <AccordionDetails>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </AccordionDetails>
              </Accordion>
              <Accordion className="Accordion-container" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="whiteIcon"/>}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Карьерный рост
                </AccordionSummary>
                <AccordionDetails>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccordionSection;
