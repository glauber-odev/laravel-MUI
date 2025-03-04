<?php

namespace App\Http\Controllers;

use App\Http\Requests\StudentRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{

    public function index() : Response
    {
        $post = Student::all();

        return Inertia::render('Users/Users',[
            'post' => $post,
            'success' => session('success')
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Users/Create');
    }

    public function poststudents(StudentRequest $request)
    {

        $student = new Student();
        $student->first_name = $request['first_name'];
        $student->last_name = $request['last_name'];
        $student->email = $request['email'];
        $student->phone_number = $request['phone_number'];
        $student->dt_birthday = $request['dt_birthday'];
        $student->national_id = $request['national_id'];

        $student->save();

        return redirect()->back()->with('success', 'Successfully posted!');
    }

    public function update(StudentRequest $request){

        $student = Student::find($request->id);
        $student->first_name = $request['first_name'];
        $student->last_name = $request['last_name'];
        $student->email = $request['email'];
        $student->phone_number = $request['phone_number'];
        $student->dt_birthday = $request['dt_birthday'];
        $student->national_id = $request['national_id'];

        $student->update();

        return redirect()->back()->with('success','Successfully updated!');
    }
}
