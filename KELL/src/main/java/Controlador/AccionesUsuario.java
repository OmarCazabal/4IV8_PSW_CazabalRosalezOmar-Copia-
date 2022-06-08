/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import Modelo.MUsuario;


/**
 *
 * @author Alumno
 */
 public class AccionesUsuario {
     public static int registroUsuario(MUsuario u){
        int estatus = 0;
        
        try{
            //establecer la conexion con la bd
            Connection con = Conexion.getConection();
            String q = "insert into mpersona(nombre_persona,appat,apmat,telefono,nombre_restaurante)"
                    + " values(?, ?, ?, ?,?)";
            
            String s="insert into musuario(correo,contrasena,id_persona,id_rol)"
                    + "values(?,?,?,?)";
            
            //ahora debo de preparar la sentencia 
            
            PreparedStatement ps = con.prepareStatement(q);
            PreparedStatement sp=con.prepareStatement(s);
            
            //objeto del empleado q=ps
            
            ps.setString(1, u.getNombre());
            ps.setString(2, u.getAppat());
            ps.setString(3, u.getApmat());
            ps.setInt(4, u.getTel());
            ps.setString(5, u.getEmpresa());
            
            //Objeto de empleado s=sp
            
            sp.setString(1,u.getCorreo());
            sp.setString(2,u.getContrasena());
            sp.setInt(3,u.getId_persona());
              sp.setInt(4,u.getId_rol());
            
            //ejecutar la querry
            estatus = ps.executeUpdate();
            estatus=sp.executeUpdate();
            
            System.out.println("Registro Exitoso");
            con.close();
            
        }catch(Exception ex){
            System.out.println("Error al registrar el usuarios");
            System.out.println(ex.getMessage());
        
        }
        return estatus;
    }




    
    public MUsuario verificarUsuario(String correo, String contrasena){
        //objeto de la persona
        MUsuario usuario = null;
        //objeto de conexion
        Connection con = null;
        //Preparacion de la sentencia
        PreparedStatement ps = null;
        //Consultas
        ResultSet rs = null;
        
        try{
            //establecemos la conexion
            con = Conexion.getConection();
            String q = "select * from musuario "
                    + "inner join crol "
                    + "on (musuario.id_rol = crol.id_rol) "
                    + "where correo=? and contrasena=?";
            //preparo la sentencia
            ps.setString(1, correo);
            ps.setString(2, contrasena);
            //ejecutamos la busqueda
            rs = ps.executeQuery();
            //buscamos al usuario
            while(rs.next()){
                usuario = new MUsuario();
                //cprivilegio pri = new cprivilegio();
                usuario.setCorreo(rs.getString("correo"));
                usuario.setContrasena(rs.getString("contrasena"));
                usuario.setId_rol(rs.getInt("id_rol"));
                usuario.setId_persona(rs.getInt("id_persona"));
                //pri.setPrivilegio_tipo(rs.getString("privilegio_tipo"));
                
                break;
            }
        
        }catch(SQLException sq){
            System.out.println("Error al verificar el usuario");
            System.out.println(sq.getMessage());
        
        }finally{
            try{
                //cerrar conexiones
                rs.close();
                ps.close();
                con.close();
            }catch(Exception ex){
            System.out.println("No se encontro la clase ");
            System.out.println(ex.getMessage());
        }
        }
        return usuario;
   }
}
