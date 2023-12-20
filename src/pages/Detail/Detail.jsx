import React, { useState, useEffect } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import "./Detail.css";
import resim from "./images/cells.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const DrugDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(id); // id'yi fetchData fonksiyonuna ilet
  }, [id]); // useEffect'in bağımlılık dizisi içine id ekleyerek id değiştiğinde useEffect'in tekrar çalışmasını sağla

  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/singledrug/${id}`
      );
      setData(response.data.drug);
      console.log(response.data.drug);
    } catch (error) {
      console.error("Error fetching data:", error.response || error);
    }
  };

  const [showAll, setShowAll] = useState(10);
  const [showModal, setShowModal] = useState(false);

  const handleShowMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [showAllToxicity, setShowAllToxicity] = useState(3);
  const [showModalToxicity, setShowModalToxicity] = useState(false);

  const handleShowMoreToxicity = () => {
    setShowAllToxicity((prevShowAll) => prevShowAll + 3);
  };

  const handleShowModalToxicity = () => {
    setShowModalToxicity(true);
  };

  const handleCloseModalToxicity = () => {
    setShowModalToxicity(false);
  };

  return (
    <div className="container mt-5">
      <Navbar />
      <div className="row card_super_class">
        <Col md={6} className="rounded-circle-container">
          <img
            src="https://picsum.photos/500/500" // 2 boyutlu resim hali gelecektir
            alt="Drug"
            className="img-fluid rounded-circle"
          />
        </Col>

        <Col md={6}>
          <Card className="drug_card mt-5 rounded title" id="first_card">
            <Card.Body>
              <Card.Title>İlaç ID : {data.drug_id}</Card.Title>
            </Card.Body>
          </Card>
          <Card className="drug_card mt-3 rounded title" id="second_card">
            <Card.Body>
              <Card.Title>İlaç Adı :{data.drug_name} </Card.Title>
            </Card.Body>
          </Card>

          <Card className="drug_card mt-3 rounded title" id="third_card">
            <Card.Body>
              <Card.Title>İlaç Formu : {data.drug_state} </Card.Title>
            </Card.Body>
          </Card>

          <Card className="drug_card mt-3 rounded title" id="fourth_card">
            <Card.Body>
              <Card.Title>İlaç Şirketi : {data.drug_kingdom}</Card.Title>
            </Card.Body>
          </Card>
          <Card className="drug_card mt-3 rounded title" id="fifth_card">
            <Card.Body>
              <Card.Title>İlaç Sınıfı :{data.drug_superclass} </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>

      {/*Cell Section*/}

      <div className="row cell_section">
        <Col md={6}>
          <Card className="drug_card mt-5 rounded " id="first_card">
            <Card.Body>
              <Card.Title>Hedef Adı :{data.target_name} </Card.Title>
            </Card.Body>
          </Card>
          <Card className="drug_card mt-3 rounded title" id="second_card">
            <Card.Body>
              <Card.Title>Hedef UniProt : {data.target_uniprot} </Card.Title>
            </Card.Body>
          </Card>

          <Card className="drug_card mt-3 rounded title" id="third_card">
            <Card.Body>
              <Card.Title>Hedef Gen İsmi : {data.target_gene_name} </Card.Title>
            </Card.Body>
          </Card>

          <Card className="drug_card mt-3 rounded title" id="fourth_card">
            <Card.Body>
              <Card.Title>Eylem : {data.action} </Card.Title>
            </Card.Body>
          </Card>
          <Card className="drug_card mt-3 rounded title" id="fifth_card">
            <Card.Body>
              <Card.Title>Hücre Lokalizasyonu : {data.cell_loc} </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="rounded-circle-container">
          <img src={resim} alt="Drug" className="img-fluid rounded-circle" />
        </Col>
      </div>

      {/** More info section */}

      <div className="info_section">
      <Card className="drug_card mt-3 rounded" onClick={handleShowModalToxicity}>
        <Card.Body>
          <Card.Title className="title">İlaç Toksikliği</Card.Title>
          <Card.Text>
            {Array.isArray(data.drug_toxicity) && data.drug_toxicity.length !== 0 ? (
              <div>
                {data.drug_toxicity
                  .slice(0, showAllToxicity)
                  .map((toxicity, index) => (
                    <div key={index}>{toxicity}</div>
                  ))}
                {data.drug_toxicity.length > showAllToxicity && (
                  <Button variant="link" className="detail_button" onClick={handleShowMoreToxicity}>
                    Daha fazla oku
                  </Button>
                )}
              </div>
            ) : (
              <span>Veri bulunamadı</span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showModalToxicity} onHide={handleCloseModalToxicity}>
        <Modal.Header closeButton>
          <Modal.Title>İlaç Toksikliği Detayları</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Array.isArray(data.drug_toxicity) && data.drug_toxicity.length !== 0 ? (
            <div>
              {data.drug_toxicity.map((toxicity, index) => (
                <div key={index}>{toxicity}</div>
              ))}
            </div>
          ) : (
            <span>Veri bulunamadı</span>
          )}
        </Modal.Body>
      </Modal>

        <Card className="drug_card mt-1 rounded">
          <Card.Body>
            <Card.Title className="title">İlaç-Yiyecek İlişkisi </Card.Title>
            <Card.Text>
              {Array.isArray(data.drug_food_interactions) &&
              data.drug_food_interactions.length != 0 ? (
                data.drug_food_interactions
              ) : (
                <span>Veri bulunamadı</span>
              )}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="drug_card mt-1 rounded">
          <Card.Body>
            <Card.Title className="title">İlaç Etki Yolları </Card.Title>
            <Card.Text>
              {Array.isArray(data.drug_pathways) &&
              data.drug_pathways.length != 0 ? (
                data.drug_pathways
              ) : (
                <span>Veri bulunamadı</span>
              )}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="drug_card mt-1 rounded" onClick={handleShowMore}>
          <Card.Body>
            <Card.Title className="title">İlaç İlişkileri</Card.Title>
            <Card.Text>
              {data && Array.isArray(data.drug_interactions) ? (
                <div>
                  {data.drug_interactions
                    .slice(0, showAll)
                    .map((interaction, index) => (
                      <div key={index}>{interaction}</div>
                    ))}
                  {data.drug_interactions.length > showAll && (
                    <Button variant="link" className="detail_button">
                      Daha fazla oku
                    </Button>
                  )}
                </div>
              ) : (
                <span>Data içeriği bir dizi değil veya data boş.</span>
              )}
            </Card.Text>
          </Card.Body>
        </Card>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header
            closeButton
            style={{
              fontSize: "18px",
              width: "900px",
              background: "white",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <Modal.Title
              style={{ fontSize: "18px", width: "900px", background: "white" }}
            >
              İlaç İlişkileri Detayları
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ fontSize: "16px", width: "900px", background: "white" }}
          >
            {data && Array.isArray(data.drug_interactions) ? (
              <div>
                {data.drug_interactions.map((interaction, index) => (
                  <div key={index}>{interaction}</div>
                ))}
              </div>
            ) : (
              <span style={{ fontSize: "14px" }}>
                Data içeriği bir dizi değil veya data boş.
              </span>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default DrugDetail;
