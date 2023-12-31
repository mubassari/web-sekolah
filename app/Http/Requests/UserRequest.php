<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;
use Illuminate\Support\Str;
use App\Models\Role;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'username' => 'required|min:5|max:10|alpha_dash|unique:user,username,'.$this->input('id'),
            'role' =>  [
                'required',
                'array',
                function ($attribute, $value, $fail) {
                    // Custom validation rule: Check if all values in the array exist in the role table
                    if (Role::whereIn('id', $value)->count() !== count($value)) {
                        $fail('Role tidak tersedia atau tidak ditemukan!');
                    }
                },
            ],
            'password' => 'required|string|min:8|confirmed',
            'password_confirmed' => 'required|string|min:8|same:password',
            // 'gtk_id' => 'required|unique:user,gtk_id,'.$this->user->gtk_id,
        ];

        return $rules;
    }
        
    public function withValidator(Validator $validator): void
    {
        session(['scroll_position' => 'user']);
    }
}
