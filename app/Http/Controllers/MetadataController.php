<?php

namespace App\Http\Controllers;
use App\Metadata;
use Illuminate\Http\Request;

class MetadataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		//Get all the record from database table and direct it to the view as response
        $metadata = Metadata::all();
        return response()->json($metadata);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    //Store the the posted data into the database with no duplicate record
    public function store(Request $request)
    {
        $content = $request->json()->all();	
		$imploded = implode(" ",$content);
		$data = json_decode($imploded,true);
		//Loop through the array and get each entry to insert into the Metadata Model
		foreach($data["Search"] as $obj){
				//Metadata::create(array(
				Metadata::updateOrCreate(array(
					'title' => $obj["Title"],
					'date' => $obj["Year"],
					'imdbID' => $obj["imdbID"],
					'type' => $obj["Type"],
					'poster' => $obj["Poster"]			
				));
			}
		return response()->json('Data added Successfully added');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		//
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      //
    }
}
