<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {
        try {
            $user = User::where('email', $request->input('email'))->first();
            if ($user && Auth::attempt(['email' => $request->input('email'), 'password'=> $request->input('password')])){
                $token = $user->createToken('main')->plainTextToken;
                return response()->json([
                    'user' => $user,
                    'token' => $token,
                ], 200);
            }  else {
                return response()->json([
                    'message' => 'Invalid credentials'
                ], 403);
            }
        } catch (\Exception $e) {
            return response()->json([
                "message" => "An error was encountered when attempting to authenticate user",
                "error" => $e->getMessage()
            ], 500);
        }
    }

    public function logout(){
            try {
                $user = Auth::user();
                $user->tokens()->delete();
                return response()->json([
                    'message'= >"Logout successfull"
                ], 204);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'An error ocurred when attempting to logout'
                ]);
            }
    }
    public function register(RegisterRequest $request){
        try {
            $user = User::create([
                'email' => $request->input('email'),
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'password' => bcrypt($request->input('password')),
            ]);
            if ($user) {
                $token = $user->createToken('main')->plainTextToken;
                return response()->json([
                    'token' => $token,
                    'user' => $user
                ], 201);
            } else {
                return response()->json([
                    'message' => 'could not register user',
                ], 400);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error ocurred when attempting to register new user'
            ]);
        }
    }
}
