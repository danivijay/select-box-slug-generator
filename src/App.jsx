import React, { useState } from 'react';
import slug from 'slug';
import { Columns, Column, Box, Label, Control, TextArea, Input, Field, Button, Title, Icon } from 'bloomer';
import { animateScroll as scroll } from 'react-scroll';

import 'bulma/css/bulma.css';

const App = () => {
      const [input, setinput] = useState('');
      const [outputObj, setoutputObj] = useState('');
      const [outputSelectboxVal, setoutputSelectboxVal] = useState('');
      const [outputKeyArr, setoutputKeyArr] = useState('');
      const [outputHash, setoutputHash] = useState('');

      const handleConvert = () => {
            const inputArr = input.split(',');
            const outputObjArr = [];
            const selectboxOptionsArr = [];
            const outputKeyArrVals = [];
            const outputHashArr = [];
            for (let item of inputArr) {
                  const key = slug(item, '_')
                        .toLowerCase()
                        .trim();
                  const value = item.trim();
                  const itemObj = { key, value };
                  selectboxOptionsArr.push(`<option value='${key}'>${value}</option>`);
                  outputObjArr.push(itemObj);
                  outputKeyArrVals.push(key);
                  outputHashArr.push(`"${key}" => "${value}"`);
            }
            setoutputObj(JSON.stringify(outputObjArr));
            setoutputSelectboxVal(`<select name="">${selectboxOptionsArr.join('')}<select>`);
            setoutputKeyArr(JSON.stringify(outputKeyArrVals));
            setoutputHash(`{ ${outputHashArr.join(', ')} }`);
      };

      const handleReset = () => {
            setinput('');
            setoutputObj('');
            setoutputSelectboxVal('');
      };

      return (
            <div className="App">
                  <Columns isCentered>
                        <Column isSize="2/3" style={{ marginTop: '10px' }}>
                              <Box>
                                    <Title>Array Converter</Title>
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
                                    <Field isGrouped>
                                          <Button isColor="warning" isFullWidth onClick={handleReset}>
                                                Reset
                                          </Button>
                                    </Field>
                                    <Field>
                                          <Label>Keys</Label>
                                          <Control>
                                                <Input type="text" placeholder={`["bread_butter","orange_milk"]`} value={outputKeyArr} />
                                          </Control>
                                    </Field>
                                    <Field>
                                          <Label>Object</Label>
                                          <Control>
                                                <TextArea
                                                      placeholder={`[{"key":"bread_butter","value":"Bread Butter"},{"key":"orange_milk","value":"Orange Milk"}]`}
                                                      value={outputObj}
                                                      readOnly
                                                />
                                          </Control>
                                    </Field>
                                    <Field>
                                          <Label>Selectbox</Label>
                                          <Control>
                                                <TextArea
                                                      placeholder={`<select name=""><option value='bread_butter'>Bread Butter</option><option value='orange_milk'>Orange Milk</option><select>`}
                                                      value={outputSelectboxVal}
                                                      readOnly
                                                />
                                          </Control>
                                    </Field>
                                    <Field>
                                          <Label>Hash</Label>
                                          <Control>
                                                <TextArea
                                                      placeholder={`{ "bread_butter" => "Bread Butter", "orange_milk" => "Orange Milk" }`}
                                                      value={outputHash}
                                                      readOnly
                                                />
                                          </Control>
                                    </Field>
                              </Box>
                              <Button isColor="success" isOutlined onClick={scroll.scrollToTop}>
                                    <Icon className="fas fa-arrow-up" />
                              </Button>
                        </Column>
                  </Columns>
            </div>
      );
};

export default App;
