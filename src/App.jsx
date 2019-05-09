import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import slug from 'slug';
import { Columns, Column, Box, Label, Control, TextArea, Input, Field, Button, Title } from 'bloomer';

const App = () => {
      const [input, setinput] = useState('');
      const [output, setoutput] = useState('');
      const [selectboxVal, setselectboxVal] = useState('');

      const handleConvert = () => {
            const inputArr = input.split(',');
            const outputArr = [];
            const selectboxOptionsArr = [];
            for (let item of inputArr) {
                  const key = slug(item, '_')
                        .toLowerCase()
                        .trim();
                  const value = item.trim();
                  const itemObj = { key, value };
                  selectboxOptionsArr.push(`<option value='${key}'>${value}</option>`);
                  outputArr.push(itemObj);
            }
            setoutput(JSON.stringify(outputArr));
            setselectboxVal(`<select name="">${selectboxOptionsArr.join('')}<select>`);
      };

      const handleReset = () => {
            setinput('');
            setoutput('');
            setselectboxVal('');
      };

      return (
            <div className="App">
                  <Columns isCentered>
                        <Column isSize="1/3" style={{ marginTop: '10px' }}>
                              <Box>
                                    <Title>Selectbox Slug Generator</Title>
                                    <Field>
                                          <Label>Elements (separated by comma)</Label>
                                          <Control>
                                                <Input
                                                      type="text"
                                                      placeholder="Eg: Bread Butter, Orange Milk"
                                                      value={input}
                                                      onChange={(e) => setinput(e.target.value)}
                                                />
                                          </Control>
                                    </Field>
                                    <Field isGrouped>
                                          <Button isColor="primary" isFullWidth onClick={handleConvert}>
                                                Convert
                                          </Button>
                                    </Field>
                                    <Field>
                                          <Label>Object</Label>
                                          <Control>
                                                <TextArea
                                                      placeholder="[{ key: 'bread_butter', value: 'Bread Butter'}, { key: 'orange_milk', value: 'Orange Milk'}]"
                                                      value={output}
                                                      readOnly
                                                />
                                          </Control>
                                    </Field>
                                    <Field>
                                          <Label>Selectbox</Label>
                                          <Control>
                                                <TextArea
                                                      placeholder="[{ key: 'bread_butter', value: 'Bread Butter'}, { key: 'orange_milk', value: 'Orange Milk'}]"
                                                      value={selectboxVal}
                                                      readOnly
                                                />
                                          </Control>
                                    </Field>
                                    <Field isGrouped>
                                          <Button isColor="warning" isFullWidth onClick={handleReset}>
                                                Reset
                                          </Button>
                                    </Field>
                              </Box>
                        </Column>
                  </Columns>
            </div>
      );
};

export default App;
