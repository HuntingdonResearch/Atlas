import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal';
import Button from '../../elements/Button';
import useModal from '../../hooks/useModal';

const WhiteContentDiv: any = styled.div.attrs(() => ({
  className: `content`
}))`
  background-color: #e0e0e0;
  padding: 2em;
`;

const TransparentContentDiv: any = styled.div.attrs(() => ({
  className: `content`
}))`
  padding: 2em;
`;

export default {
  component: Modal,
  title: 'Components/Modal'
};

export const Simple = () => {
  const {
    active,
    handleShow,
    handleHide
  } = useModal();

  return (
    <>
      <Button color="primary" size="large" onClick={handleShow}>
        Launch example modal
      </Button>
      <Modal active={active}>
        <Modal.Background onClick={handleHide}/>
        <Modal.Content>
          <WhiteContentDiv>
            <h1>Hello World</h1>
            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
              ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper
              dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as
              well!
            </p>
            <h2>Second level</h2>
            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus
              mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam
              mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
            </p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
          </WhiteContentDiv>
        </Modal.Content>
        <Modal.Close onClick={handleHide}/>
      </Modal>
    </>
  );
};

export const Image = () => {
  const {
    active,
    handleShow,
    handleHide
  } = useModal();

  return (
    <>
      <Button color="primary" size="large" onClick={handleShow}>
        Launch image modal
      </Button>
      <Modal active={active}>
        <Modal.Background onClick={handleHide}/>
        <Modal.Content>
          <p className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
          </p>
        </Modal.Content>
        <Modal.Close onClick={handleHide}/>
      </Modal>
    </>
  );
};

export const Fancy = () => {
  const {
    active,
    handleShow,
    handleSubmit,
    handleCancel
  } = useModal();

  return (
    <>
      <Button color="primary" size="large" onClick={handleShow}>
        Launch example modal
      </Button>
      <Modal active={active}>
        <Modal.Background onClick={handleCancel}/>
        <Modal.Card>
          <Modal.Card.Head>
            Modal title
          </Modal.Card.Head>
          <Modal.Card.Body>
            <TransparentContentDiv>
              <h1>Hello World</h1>
              <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
                ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper
                dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as
                well!
              </p>
              <h2>Second level</h2>
              <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus
                mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam
                mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
              </p>
            </TransparentContentDiv>
          </Modal.Card.Body>
          <Modal.Card.Foot>
            <Button color="success" onClick={handleSubmit}>Save changes</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    </>
  );
};
