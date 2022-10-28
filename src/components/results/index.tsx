import React, { useState } from 'react';
import Table, { FieldType } from 'components/table';
import Modal from 'components/modal';
import { useStore } from 'store/index';
import { Result } from 'interfaces/index';
import { Formik, Form, Field } from 'formik';
import initialState from 'store/states';
import { Input, Button, Label, Container } from 'reactstrap';
import { updateResult } from 'store/actions';

interface Props { }

const Results: React.FC<Props> = () => {

    const { state, dispatch } = useStore();
    const [show, setShow] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState<Result>({});

    const fields: FieldType[] = [{
        col: "Id",
        field: "id"
    }, {
        col: "Title",
        field: "title"
    }]

    const toggle = () => {
        setShow(!show);
    }

    const onRecordClick = (result: Result) => {
        setSelectedRecord(result);
        toggle()
    }

    const onSubmit = (value: any) => {
        dispatch(updateResult(value));
        toggle();
    }

    return (
        <Container>
            <Table fields={fields} results={state.results} onClick={onRecordClick}></Table>
            <Modal show={show} toggle={toggle} title={"View/Edit " + selectedRecord.id} >
                <Formik
                    initialValues={selectedRecord}
                    onSubmit={onSubmit}
                >
                    {() => (<Form>
                        <Field
                            as={Input}
                            label="Title"
                            name="title"
                            placeholder="Enter Title"
                            fullWidth
                            style={{ marginBottom: "15px" }}
                        />
                        <Field
                            as={Input}
                            label="Body"
                            name="body"
                            placeholder="Enter description"
                            fullWidth
                            fullHeight
                            style={{ marginBottom: "15px" }}
                        />
                        <Button
                            type="submit"
                            data-testid="grp-sub"
                            color="primary"
                            variant="contained"
                            fullWidth
                        >
                            Save
                        </Button>
                    </Form>
                    )}
                </Formik>
            </Modal>
        </Container>
    )
}

export default Results;
