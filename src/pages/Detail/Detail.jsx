import React, { useState, useEffect } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";
import "./Detail.css";
import resim from "./images/cell2.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import LoadingScreen from "../../components/LoadingScreen";
import TeamImage from "./images/MedSoft.png";
import { createViewer } from "3dmol";

const DrugDetail = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const [smiles, setSmiles] = useState("");
  const [pdbData, setPdbData] = useState("");
  const [show3DModal, setShow3DModal] = useState(false);

  const handleInputChange = (event) => {
    setSmiles(event.target.value);
  };

  const fetchMolecule = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/draw_molecule/${data.drug_id}`,
        {
          responseType: "text",
        }
      );
      setPdbData(response.data);
      setShow3DModal(true);
    } catch (error) {
      console.error("Error fetching molecule:", error);
      setLoading(false);
    }
  };

  const handleClose3DModal = () => {
    setShow3DModal(false);
  };

  const displayMolecule = (pdbData) => {
    // Use 3Dmol.js to visualize the molecule
    const viewer = createViewer(document.getElementById("viewer3DModal"));
    viewer.addModel(pdbData, "pdb");
    viewer.setStyle({
      stick: {
        color: "gray", // Çubuk rengi
        ends: {
          color: "red",
        },
      },
    });
    viewer.zoomTo();
    viewer.render();
  };

  useEffect(() => {
    fetchData(id);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (show3DModal) {
      displayMolecule(pdbData);
      setLoading(false);
    }
  }, [show3DModal]);

  useEffect(() => {
    // Once data is set, fetch the image
    if (data.drug_id) {
      fetchImage(data.drug_id);
      setLoading(false);

    }
  }, [data]);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/singledrug/${id}`
      );
      setData(response.data.drug);
      console.log(response.data.drug);

      // Data is loaded, set loading to false
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.response || error);
    }
  };

  const fetchImage = async (drugId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/molecule/${drugId}`,
        { responseType: "arraybuffer" }
      );

      // Convert data from arraybuffer to base64 format
      const base64Image = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      // Update the state
      setImage(`data:image/png;base64,${base64Image}`);
    } catch (error) {
      console.error("Error fetching image:", error);
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
      {/* Render LoadingScreen while loading */}
      {loading ? (
        <LoadingScreen />
      ) : (
        // Render the rest of the component once data and image are loaded
        <>
          <SecondaryNavbar />
          <div className="row card_super_class ">
            <Col
              md={6}
              className="rounded-circle-container mol-img"
              onClick={fetchMolecule}
            >
              <img
                src={image || TeamImage}
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
                  <Card.Title>
                    İlaç Sınıflandırılması : {data.drug_kingdom}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="drug_card mt-3 rounded title" id="fifth_card">
                <Card.Body>
                  <Card.Title>İlaç Sınıfı :{data.drug_superclass} </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <div className="row cell_section">
            <Col md={6}>
              <Card className="drug_card mt-5 rounded " id="first_card">
                <Card.Body>
                  <Card.Title>Hedef Adı :{data.target_name} </Card.Title>
                </Card.Body>
              </Card>
              <Card className="drug_card mt-3 rounded title" id="second_card">
                <Card.Body>
                  <Card.Title>
                    Hedef UniProt : {data.target_uniprot}{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="drug_card mt-3 rounded title" id="third_card">
                <Card.Body>
                  <Card.Title>
                    Hedef Gen İsmi : {data.target_gene_name}{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="drug_card mt-3 rounded title" id="fourth_card">
                <Card.Body>
                  <Card.Title>Eylem : {data.action} </Card.Title>
                </Card.Body>
              </Card>
              <Card className="drug_card mt-3 rounded title" id="fifth_card">
                <Card.Body>
                  <Card.Title>
                    Hücre Lokalizasyonu : {data.cell_loc}{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="rounded-circle-container second-img">
              <img src={resim} alt="Drug" className="rounded-circle" />
            </Col>
          </div>
          <div className="info_section">
            <Card
              className="drug_card mt-3 rounded"
              onClick={handleShowModalToxicity}
            >
              <Card.Body>
                <Card.Title className="title">İlaç Toksikliği</Card.Title>
                <Card.Text>
                  {Array.isArray(data.drug_toxicity) &&
                  data.drug_toxicity.length !== 0 ? (
                    <div>
                      {data.drug_toxicity
                        .slice(0, showAllToxicity)
                        .map((toxicity, index) => (
                          <div key={index}>{toxicity}</div>
                        ))}
                      {data.drug_toxicity.length > showAllToxicity && (
                        <Button
                          variant="link"
                          className="detail_button"
                          onClick={handleShowMoreToxicity}
                        >
                          Daha fazla oku
                        </Button>
                      )}
                    </div>
                  ) : (
                    <span>
                      Güncel veri bulunmamaktadır. Zamanla eklenecektir.
                      Sabrınız ve ilginiz için teşekkürler
                    </span>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
            <Modal show={showModalToxicity} onHide={handleCloseModalToxicity}>
              <Modal.Header closeButton>
                <Modal.Title>İlaç Toksikliği Detayları</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {Array.isArray(data.drug_toxicity) &&
                data.drug_toxicity.length !== 0 ? (
                  <div>
                    {data.drug_toxicity.map((toxicity, index) => (
                      <div key={index}>{toxicity}</div>
                    ))}
                  </div>
                ) : (
                  <span>
                    Güncel veri bulunmamaktadır. Zamanla eklenecektir. Sabrınız
                    ve ilginiz için teşekkürler
                  </span>
                )}
              </Modal.Body>
            </Modal>
            <Card className="drug_card mt-1 rounded">
              <Card.Body>
                <Card.Title className="title">
                  İlaç-Yiyecek İlişkisi{" "}
                </Card.Title>
                <Card.Text>
                  {Array.isArray(data.drug_food_interactions) &&
                  data.drug_food_interactions.length != 0 ? (
                    data.drug_food_interactions
                  ) : (
                    <span>
                      Güncel veri bulunmamaktadır. Zamanla eklenecektir.
                      Sabrınız ve ilginiz için teşekkürler
                    </span>
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
                    <span>
                      Güncel veri bulunmamaktadır. Zamanla eklenecektir.
                      Sabrınız ve ilginiz için teşekkürler
                    </span>
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
                    <span>
                      Güncel veri bulunmamaktadır. Zamanla eklenecektir.
                      Sabrınız ve ilginiz için teşekkürler
                    </span>
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
                  style={{
                    fontSize: "18px",
                    width: "900px",
                    background: "white",
                  }}
                >
                  İlaç İlişkileri Detayları
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{
                  fontSize: "16px",
                  width: "900px",
                  background: "white",
                }}
              >
                {data && Array.isArray(data.drug_interactions) ? (
                  <div>
                    {data.drug_interactions.map((interaction, index) => (
                      <div key={index}>{interaction}</div>
                    ))}
                  </div>
                ) : (
                  <span style={{ fontSize: "14px" }}>
                    Güncel veri bulunmamaktadır. Zamanla eklenecektir. Sabrınız
                    ve ilginiz için teşekkürler
                  </span>
                )}
              </Modal.Body>
            </Modal>
          </div>
          <Modal show={show3DModal} onHide={handleClose3DModal} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>3D Yapı</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                id="viewer3DModal"
                style={{ width: "100%", height: "500px" }}
              ></div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
};

export default DrugDetail;
